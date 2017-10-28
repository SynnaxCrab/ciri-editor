import React from 'react'

const renderNode = props => {
  const { node, attributes, children } = props

  switch (node.type) {
    case 'block-quote': return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list': return <ul {...attributes}>{children}</ul>
    case 'list-item': return <li {...attributes}>{children}</li>
    case 'heading-one': return <h1 {...attributes}>{children}</h1>
    case 'heading-two': return <h2 {...attributes}>{children}</h2>
    case 'heading-three': return <h3 {...attributes}>{children}</h3>
    case 'heading-four': return <h4 {...attributes}>{children}</h4>
    case 'heading-five': return <h5 {...attributes}>{children}</h5>
    case 'heading-six': return <h6 {...attributes}>{children}</h6>
    default: return null
  }
}

export default renderNode