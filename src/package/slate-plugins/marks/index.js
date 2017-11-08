import renderMark from './MarkRender'
import MarkButton from './MarkButton'
import { toggleMark, hasMark } from './MarkHelpers'

import HotKey from '../slate-hotkey'

const Marks = marks => ({
  helpers: {
    hasMark,
  },
  changes: {
    toggleMark,
  },
  plugins: [
    ...marks.map(({key, type}) => (
      HotKey({
        key,
        transform: t => toggleMark(t, type)
      })
    )),
    { renderMark },
  ],
})

export default Marks
export { MarkButton }
