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
  const { selection } = value
  const { start, end, isExpanded } = selection
  if (isExpanded) return

  const { startBlock } = value
  if (start.offset === 0 && startBlock.text.length === 0) {
    return onBackspace(event, change)
  }

  if (end.offset !== startBlock.text.length) return

  if (startBlock.type !== 'heading' && startBlock.type !== 'block-quote') return

  event.preventDefault()

  change.splitBlock().setBlocks('paragraph')

  return true
}
