import { getEventRange, getEventTransfer } from 'slate-react'
import isUrl from 'is-url'
import isImage from 'is-image'
import { insertImage } from './ImageHelpers'

export const onDropOrPaste = (event, change, editor) => {
  const target = getEventRange(event, change.value)
  if(!target && event.type === 'drop') return

  const transfer = getEventTransfer(event)
  const { type, text, files } = transfer

  if (type === 'files') {
    for (const file of files) {
      const reader = new FileReader()
      const [ mime ] = file.type.split('/')
      if (mime !== 'image') continue

      reader.addEventListener('load', () => {
        editor.change(c => {
          c.call(insertImage, reader.result)
        })
      })

      reader.readAsDataURL(file)
    }
  }

  if (type === 'text') {
    if (!isUrl(text)) return
    if (!isImage(text)) return
    change.call(insertImage, text)
  }
}
