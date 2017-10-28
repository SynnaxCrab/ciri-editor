import AutoMarkdownSchema from './AutoMarkdownSchema'
import { onSpace, onEnter, onBackspace } from './AutoMarkdownEvents'
import AutoMarkDownRenderNode from './AutoMarkdownRenderNode'

const AutoMarkdownPlugin = () => ({
  schema: AutoMarkdownSchema,
  onKeyDown: (event, change) => {
    switch (event.key) {
      case ' ': return onSpace(event, change)
      case 'Backspace': return onBackspace(event, change)
      case 'Enter': return onEnter(event, change)
      default: return false
    }
  },
  renderNode: AutoMarkDownRenderNode,
})

export { AutoMarkdownPlugin, AutoMarkdownSchema }
