import renderMark from './MarkRender'

import MarkKeyboardShortcut from './MarkKeyboardShortcut'

import MarkButton from './MarkButton'


const MarkPlugin = ({ key, type }) => ({
  onKeyDown(event, data, change) {
    return MarkKeyboardShortcut(key, type, data, change)
  },
  renderMark: renderMark,
})

export default MarkPlugin

export {
  MarkPlugin,
  MarkButton,
}
