import React from 'react'
import { State } from 'slate'
import { Editor } from 'slate-react'

import { MarkPlugin, MarkButton } from './slate-plugins/slate-mark-plugin'
import { AutoMarkdownPlugin } from './slate-plugins/slate-auto-markdown-plugin'

const initialState = State.fromJSON({
  document: {
    nodes: [
      {
        kind: 'block',
        type: 'paragraph',
        nodes: [
          {
            kind: 'text',
            ranges: [
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

const plugins = [
  MarkPlugin({ key: 'b', type: 'bold' }),
  AutoMarkdownPlugin(),
]

class CiriEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: initialState,
    }
  }

  onChange = ({ state }) => this.setState({ editorState: state })

  render() {
    return (
      <div>
        <MarkButton
          type='bold'
          icon='format_bold'
          activeMarks={this.state.editorState.activeMarks}
          onChange={this.onChange}
          change={this.state.editorState.change()}
        />
        <Editor
          plugins={plugins}
          state={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default CiriEditor
