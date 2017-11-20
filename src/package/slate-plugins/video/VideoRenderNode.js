import React from 'react'
import Video from './Video'

const renderNode = ({ node, attributes }) => {
  switch (node.type) {
    case 'video': {
      const src = node.data.get('src')
      return (
        <Video src={src} {...attributes} />
      )
    }
    default: return null
  }
}

export default renderNode
