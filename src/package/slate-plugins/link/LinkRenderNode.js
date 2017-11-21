import React from 'react'

const renderNode = ({ node, attributes, children }) => {
  switch (node.type) {
    case 'link': {
      const href = node.data.get('href')
      return <a {...attributes} href={href}>{children}</a>
    }
    default: return null
  }
}

export default renderNode
