import AutoMarkdownSchema from './AutoMarkdownSchema'
import { onSpace, onEnter, onBackspace } from './AutoMarkdownEvents'

const AutoMarkdownPlugin = () => ({
  schema: AutoMarkdownSchema,
  onKeyDown: (event, data, change) => {
    switch (data.key) {
      case 'space': return onSpace(event, change)
      case 'backspace': return onBackspace(event, change)
      case 'enter': return onEnter(event, change)
      default: return false
    }
  },
})

export { AutoMarkdownPlugin, AutoMarkdownSchema }
