import { getType } from './AutoMarkdownUtils'

export const onSpace = (event, change) => {
  const { state } = change
  if (state.isExpanded) return

  const { startBlock, startOffset } = state
  const chars = startBlock.text.slice(0, startOffset).replace(/\s*/g, '')
  const type = getType(chars)

  if (!type) return
  if (type === 'list-item' && startBlock.type === 'list-item') return
  event.preventDefault()

  console.log("KKKKKKKKKKKKKK")
  console.log(type)
  change.setBlock(type)

  if (type === 'list-item') {
    change.wrapBlock('bulleted-list')
  }

  change
    .extendToStartOf(startBlock)
    .delete()

  return true
}

export const onBackspace = (event, change) => {
  const { state } = change
  if (state.isExpanded) return
  if (state.startOffset !== 0) return

  const { startBlock } = state
  if (startBlock.type === 'paragraph') return

  event.preventDefault()
  change.setBlock('paragraph')

  if (startBlock.type === 'list-item') {
    change.unwrapBlock('bulleted-list')
  }

  return true
}

export const onEnter = (event, change) => {
  const { state } = change
  if (state.isExpanded) return

  const { startBlock, startOffset, endOffset } = state
  if (startOffset === 0 && startBlock.text.length === 0) {
    return onBackspace(event, change)
  }

  if (endOffset !== startBlock.text.length) return

  if (
    startBlock.type !== 'heading-one' &&
    startBlock.type !== 'heading-two' &&
    startBlock.type !== 'heading-three' &&
    startBlock.type !== 'heading-four' &&
    startBlock.type !== 'heading-five' &&
    startBlock.type !== 'heading-six' &&
    startBlock.type !== 'block-quote'
  ) {
    return
  }

  event.preventDefault()

  change
    .splitBlock()
    .setBlock('paragraph')

  return true
}