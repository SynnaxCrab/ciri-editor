import React, { useState } from 'react'
import { Value } from 'slate'
import { Editor } from 'slate-react'

import Marks from './slate-plugins/marks'
import Markdown from './slate-plugins/markdown'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
})

const marks = [
  { key: 'mod+b', type: 'bold' },
  { key: 'mod+i', type: 'italic' },
  { key: 'mod+u', type: 'underlined' },
  { key: 'mod+c', type: 'code' },
]

const plugins = [...Marks(marks), ...Markdown()]

const CiriEditor = () => {
  const [value, setValue] = useState(initialValue)

  const onChange = ({ value }) => setValue(value)

  const onKeyDown = (event, editor, next) => {
    if (!event.ctrlKey) return next()

    switch (event.key) {
      case '`': {
        event.preventDefault()
        const isCode = editor.value.blocks.some(block => block.type === 'code')
        editor.setBlocks(isCode ? 'paragraph' : 'code')
        break
      }
      default:
        return next()
    }
  }

  return (
    <Editor
      plugins={plugins}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

export default CiriEditor
