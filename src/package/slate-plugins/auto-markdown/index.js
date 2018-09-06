import AutoReplace from 'slate-auto-replace'
import { onEnter, onBackspace } from './AutoMarkdownEvents'
import AutoMarkDownRenderNode from './AutoMarkdownRenderNode'

const plugin = () => ({
  onKeyDown: (event, change) => {
    switch (event.key) {
      case 'Enter':
        return onEnter(event, change)
      case 'Backspace':
        return onBackspace(event, change)
      default:
        return
    }
  },
  renderNode: AutoMarkDownRenderNode,
})

const AutoMarkdown = () => ({
  plugins: [
    AutoReplace({
      trigger: 'space',
      before: /^(>)$/,
      change: change => change.setBlocks({ type: 'block-quote' }),
    }),
    AutoReplace({
      trigger: 'space',
      before: /^(\*)$/,
      change: change =>
        change.setBlocks({ type: 'list-item' }).wrapBlock('bulleted-list'),
    }),
    AutoReplace({
      trigger: 'space',
      before: /^(#{1,6})$/,
      change: (change, event, matches) => {
        const [hashes] = matches.before
        const level = hashes.length
        return change.setBlocks({
          type: 'heading',
          data: { level },
        })
      },
    }),
    AutoReplace({
      trigger: 'enter',
      before: /^(-{3})$/,
      change: change => {
        return change.setBlocks({
          type: 'hr',
          isVoid: true,
        })
      },
    }),
    plugin(),
  ],
})

export default AutoMarkdown
