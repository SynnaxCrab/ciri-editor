import React from 'react'
import { State } from 'slate'
import { Editor } from 'slate-react'

import { MarkPlugin } from './slate-plugins/slate-mark-plugin'
import { AutoMarkdownPlugin } from './slate-plugins/slate-auto-markdown-plugin'
import HoveringMenu, { updateMenuPosition } from './HoveringMenu'

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

const markPlugins = [
  { key: 'b', type: 'bold' },
  { key: 'i', type: 'italic' },
  { key: 'u', type: 'underlined' },
  { key: 'c', type: 'code' },
].map(x => MarkPlugin(x))

const plugins = [
  ...markPlugins,
  AutoMarkdownPlugin(),
]

class CiriEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: initialState,
    }
  }

  componentDidMount = () => {
    updateMenuPosition(this.menu, this.state.editorState)
  }

  componentDidUpdate = () => {
    updateMenuPosition(this.menu, this.state.editorState)
  }

  onChange = ({ state }) => this.setState({ editorState: state })

  render() {
    return (
      <div>
        <HoveringMenu
          menuRef={el => this.menu = el}
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
