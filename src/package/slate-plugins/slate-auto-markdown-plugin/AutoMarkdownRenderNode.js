import React from 'react'

const renderNode = props => {
  const { node, attributes, children } = props

  switch (node.type) {
    case 'block-quote': return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list': return <ul {...attributes}>{children}</ul>
    case 'list-item': return <li {...attributes}>{children}</li>
    case 'heading': 
      const level = node.data.get('level')
      const Tag = `h${level}`
      return <Tag {...attributes}>{children}</Tag>
    default: return null
  }
}

export default renderNode
