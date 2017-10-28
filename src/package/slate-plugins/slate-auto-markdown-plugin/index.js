import { onSpace, onEnter, onBackspace } from './AutoMarkdownEvents'
import AutoMarkDownRenderNode from './AutoMarkdownRenderNode'

const AutoMarkdownPlugin = () => ({
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

export default AutoMarkdownPlugin
