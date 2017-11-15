import React from 'react'

const renderNode = ({ node, attributes }) => {
  switch (node.type) {
    case 'image': {
      const src = node.data.get('src')
      const alt = node.data.get('alt') || ''
      return (
        <img src={src} alt={alt} {...attributes} />
      )
    }
    default: return null
  }
}

export default renderNode
