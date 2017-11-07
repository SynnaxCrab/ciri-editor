export const onBackspace = (event, change) => {
  const { value } = change
  if (value.isExpanded) return
  if (value.startOffset !== 0) return

  const { startBlock } = value
  if (startBlock.type === 'paragraph') return

  event.preventDefault()
  change.setBlock('paragraph')

  if (startBlock.type === 'list-item') {
    change.unwrapBlock('bulleted-list')
  }

  return true
}

export const onEnter = (event, change) => {
  const { value } = change
  if (value.isExpanded) return

  const { startBlock, startOffset, endOffset } = value
  if (startOffset === 0 && startBlock.text.length === 0) {
    return onBackspace(event, change)
  }

  if (endOffset !== startBlock.text.length) return

  if (startBlock.type !== 'heading' && startBlock.type !== 'block-quote') return

  event.preventDefault()

  change
    .splitBlock()
    .setBlock('paragraph')

  return true
}
