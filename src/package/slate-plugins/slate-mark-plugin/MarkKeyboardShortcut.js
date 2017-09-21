import { markStrategy } from './MarkUtils'

const MarkKeyboardShortcut = (key, type, data, change) => {
  if (data.isMod && data.key === key) return markStrategy(type, change)
  return
}

export default MarkKeyboardShortcut
