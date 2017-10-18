import React, { Component } from 'react'
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

class CiriEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: initialState,
    }
  }

  componentDidUpdate = () => updateMenuPosition(this.menu, this.state.editorState)

  onChange = ({ state }) => this.setState({ editorState: state })

  render() {
    const editorState = this.state.editorState
    return (
      <div>
        {menuIsOpened(editorState) ? <HoveringMenu
          menuRef={el => this.menu = el}
          onChange={this.onChange}
          editorState={editorState}
        /> : null}
        <Editor
          plugins={plugins}
          state={editorState}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

// helpers, will be extract out later
const menuIsOpened = editorState => editorState.isExpanded && editorState.isFocused

export default CiriEditor
