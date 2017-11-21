import { getEventTransfer } from 'slate-react'
import isUrl from 'is-url'
import { hasLinks, wrapLink, unwrapLink } from './LinkHelpers'

export const onPaste = (event, change, editor) => {
  const { value } = change
  if (value.isCollapsed) return

  const transfer = getEventTransfer(event)
  const { type, text } = transfer
  if (type !== 'text' && type !== 'html') return
  if (!isUrl(text)) return

  if (hasLinks(value)) {
    change.call(unwrapLink)
  }

  change.call(wrapLink, text)
  return true
}
