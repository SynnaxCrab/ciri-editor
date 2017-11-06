import AutoReplace from 'slate-auto-replace'
import { onEnter, onBackspace } from './AutoMarkdownEvents'
import AutoMarkDownRenderNode from './AutoMarkdownRenderNode'

const plugin = () => ({
  onKeyDown: (event, change) => {
    switch (event.key) {
      case 'Enter': return onEnter(event, change)
      case 'Backspace': return onBackspace(event, change)
      default: return
    }
  },
  renderNode: AutoMarkDownRenderNode,
})

const AutoMarkdown = () => ({
  plugins: [
    AutoReplace({
      trigger: 'space',
      before: /^(>)$/,
      transform: transform => transform.setBlock('block-quote')
    }),
    AutoReplace({
      trigger: 'space',
      before: /^(\*)$/,
      transform: transform => transform.setBlock('list-item').wrapBlock('bulleted-list')
    }),
    AutoReplace({
      trigger: 'space',
      before: /^(#{1,6})$/,
      transform: (transform, event, matches) => {
        const [ hashes ] = matches.before
        const level = hashes.length
        return transform.setBlock({
          type: 'heading',
          data: { level }
        })
      }
    }),
    plugin(),
  ]
})

export default AutoMarkdown
