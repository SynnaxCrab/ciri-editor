import React, { Component } from 'react'
import { Value } from 'slate'
import { Editor } from 'slate-react'

import { MarkPlugin } from './slate-plugins/slate-mark-plugin'
import AutoMarkdownPlugin from './slate-plugins/slate-auto-markdown-plugin'
import HoveringMenu, { updateMenuPosition } from './HoveringMenu'
import InlineTooltip, { updateInlineTooltipPosition } from './InlineTooltip'

const initialValue = Value.fromJSON({
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
      editorState: initialValue,
    }
  }

  componentDidUpdate = () => {
    updateMenuPosition(this.menu, this.state.editorState)
    updateInlineTooltipPosition(this.inlineTooltip, this.state.editorState)
  }

  onChange = ({ value }) => this.setState({ editorState: value })

  render() {
    const editorState = this.state.editorState
    return (
      <div>
        {menuIsOpened(editorState) ? <HoveringMenu
          menuRef={el => this.menu = el}
          onChange={this.onChange}
          editorState={editorState}
        /> : null}
        {InlineTooltipIsOpened(editorState) ? <InlineTooltip
          inlineTooltipRef={el => this.inlineTooltip = el}
        /> : null}
        <Editor
          plugins={plugins}
          value={editorState}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

// helpers, will be extract out later
const menuIsOpened = editorState => editorState.isExpanded && editorState.isFocused
const InlineTooltipIsOpened = editorState => {
  const { document, startBlock, startText, anchorOffset, isFocused } = editorState
  const previousBlock = document.getPreviousBlock(startBlock.key)
  return anchorOffset === 0 && isFocused && previousBlock && startText.text === ''
}

export default CiriEditor
