import React from 'react'
import AutoReplace from 'slate-auto-replace'

const renderNode = (props, editor, next) => {
  const { node, attributes, children } = props

  switch (node.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'hr':
      return <hr />
    case 'heading':
      const level = node.data.get('level')
      const Tag = `h${level}`
      return <Tag {...attributes}>{children}</Tag>
    default:
      return next()
  }
}

export const onEnter = (event, editor, next) => {
  const { value } = editor
  const { selection } = value
  const { start, end, isExpanded } = selection
  if (isExpanded) return next()

  const { startBlock } = value
  if (start.offset === 0 && startBlock.text.length === 0) {
    return onBackspace(event, editor, next)
  }

  if (end.offset !== startBlock.text.length) return next()

  if (startBlock.type !== 'heading' && startBlock.type !== 'block-quote')
    return next()

  event.preventDefault()

  editor.splitBlock().setBlocks('paragraph')

  return true
}

const onBackspace = (event, editor, next) => {
  const { value } = editor
  const { selection } = value
  if (selection.isExpanded) return next()
  if (selection.start.offset !== 0) return next()

  const { startBlock } = value
  if (startBlock.type === 'paragraph') return next()

  event.preventDefault()
  editor.setBlocks('paragraph')

  if (startBlock.type === 'list-item') {
    editor.unwrapBlock('bulleted-list')
  }
}

const Markdown = () => [
  { renderNode },
  AutoReplace({
    trigger: 'space',
    before: /^(>)$/,
    change: editor => editor.setBlocks({ type: 'block-quote' }),
  }),
  AutoReplace({
    trigger: 'space',
    before: /^(\*)$/,
    change: editor =>
      editor.setBlocks({ type: 'list-item' }).wrapBlock('bulleted-list'),
  }),
  AutoReplace({
    trigger: 'space',
    before: /^(#{1,6})$/,
    change: (editor, event, matches) => {
      const [hashes] = matches.before
      const level = hashes.length
      return editor.setBlocks({
        type: 'heading',
        data: { level },
      })
    },
  }),
  AutoReplace({
    trigger: 'enter',
    before: /^(-{3})$/,
    change: editor => {
      return editor.setBlocks({
        type: 'hr',
        isVoid: true,
      })
    },
  }),
  {
    onKeyDown: (event, editor, next) => {
      switch (event.key) {
        case 'Enter':
          return onEnter(event, editor, next)
        case 'Backspace':
          return onBackspace(event, editor, next)
        default:
          return next()
      }
    },
  },
]

export default Markdown
