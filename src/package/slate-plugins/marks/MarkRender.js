import React from 'react'

const renderMark = ({ children, mark }) => {
  switch(mark.type) {
    case 'bold': return <strong>{children}</strong>
    case 'code': return <code>{children}</code>
    case 'italic': return <em>{children}</em>
    case 'underlined': return <u>{children}</u>
    default: return null
  }
}

export default renderMark
