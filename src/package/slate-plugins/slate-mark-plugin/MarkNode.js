import React from 'react'

const MarkNodes = {
  bold: ({ children }: Props) => <strong>{children}</strong>,
  code: ({ children }: Props) => <code>{children}</code>,
  italic: ({ children }: Props) => <em>{children}</em>,
  underlined: ({ children }: Props) => <u>{children}</u>,
}

const MarkNode = type => MarkNodes[type]

export default MarkNode
