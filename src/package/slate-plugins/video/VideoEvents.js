import { getEventTransfer } from 'slate-react'
import isUrl from 'is-url'
import { insertVideo } from './VideoHelpers'

export const onPaste = (event, change, editor) => {
  const transfer = getEventTransfer(event)
  const { type, text } = transfer

  if (type === 'text') {
    if (!isUrl(text)) return
    // TODO: check if it's a video
    // if (!isVideo(text)) return
    change.call(insertVideo, text)
  }
}
