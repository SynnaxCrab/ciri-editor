import MarkSchema from './MarkSchema'
import MarkNode from './MarkNode'

import MarkKeyboardShortcut from './MarkKeyboardShortcut'

import * as MarkUtils from './MarkUtils'
import MarkButton from './MarkButton'


const MarkPlugin = ({ key, type }) => ({
  schema: MarkSchema(type),

  onKeyDown(event, data, change) {
    event.preventDefault()
    return MarkKeyboardShortcut(key, type, data, change)
  },
})

export {
  MarkPlugin,
  MarkSchema,
  MarkNode,
  MarkKeyboardShortcut,
  MarkUtils,
  MarkButton,
}
