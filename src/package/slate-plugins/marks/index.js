import React from 'react'
import HotKey from '../slate-hotkey'

import HoveringMenu from './HoveringMenu'

const command = (editor, type) => editor.toggleMark(type)

const renderEditor = (props, editor, next) => {
  const children = next()
  return (
    <>
      {children}
      <HoveringMenu editor={editor} />
    </>
  )
}

const renderNode = (props, editor, next) => {
  switch (props.node.type) {
    case 'code':
      return (
        <pre {...props.attributes}>
          <code>{props.children}</code>
        </pre>
      )
    default:
      return next()
  }
}

const renderMark = (props, editor, next) => {
  switch (props.mark.type) {
    case 'bold':
      return <strong>{props.children}</strong>
    case 'code':
      return <code>{props.children}</code>
    case 'italic':
      return <em>{props.children}</em>
    case 'underlined':
      return <u>{props.children}</u>
    default:
      return next()
  }
}

const Marks = marks => [
  { renderMark },
  { renderNode },
  { renderEditor },
  ...marks.map(({ key, type }) =>
    HotKey({
      key,
      command: editor => command(editor, type),
    }),
  ),
]

export default Marks
