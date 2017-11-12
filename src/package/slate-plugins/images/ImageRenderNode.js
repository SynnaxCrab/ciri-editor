import React from 'react'
import { watch } from 'fs';

const renderNode = ({ node, attributes }) => {
  switch (node.type) {
    case 'image': {
      const src = node.data.get('src')
      return (
        <img src={src} {...attributes} />
      )
    }
    default: return null
  }
}

export default renderNode
