import React from 'react'

export default {
  'block-quote': ({ children }) => <blockquote><p>{children}</p></blockquote>,
  'bulleted-list': ({ children }) => <ul>{children}</ul>,
  'list-item': ({ children }) => <li>{children}</li>,
  'heading-one': ({ children }) => <h1>{children}</h1>,
  'heading-two': ({ children }) => <h2>{children}</h2>,
  'heading-three': ({ children }) => <h3>{children}</h3>,
  'heading-four': ({ children }) => <h4>{children}</h4>,
  'heading-five': ({ children }) => <h5>{children}</h5>,
  'heading-six': ({ children }) => <h6>{children}</h6>,
}
