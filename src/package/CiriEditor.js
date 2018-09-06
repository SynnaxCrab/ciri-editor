import React, { Component } from 'react'
import { Value } from 'slate'
import { Editor } from 'slate-react'

import Marks from './slate-plugins/marks'
import Image from './slate-plugins/image'
import Video from './slate-plugins/video'
import Link from './slate-plugins/link'
import AutoMarkdown from './slate-plugins/auto-markdown'
import HoveringMenu, { updateMenuPosition } from './HoveringMenu'
import InlineTooltip, { updateInlineTooltipPosition } from './InlineTooltip'

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

const plugins = [
  ...Marks(marks).plugins,
  ...AutoMarkdown().plugins,
  ...Image().plugins,
  ...Video().plugins,
  Link(),
]

class CiriEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: initialValue,
      inlineTooltipScaled: false,
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    updateMenuPosition(this.menu, this.state.editorState)
    updateInlineTooltipPosition(this.inlineTooltip, this.state.editorState)

    const inlineTooltipScaled =
      prevState.inlineTooltipScaled &&
      InlineTooltipIsOpened(this.state.editorState)
    if (inlineTooltipScaled !== prevState.inlineTooltipScaled) {
      this.setState({ inlineTooltipScaled })
    }
  }

  onChange = ({ value }) => this.setState({ editorState: value })

  onPlusButtonClick = () => {
    this.setState(prevState => ({
      inlineTooltipScaled: !prevState.inlineTooltipScaled,
    }))
  }

  render() {
    const { editorState, inlineTooltipScaled } = this.state
    return (
      <div>
        {menuIsOpened(editorState) ? (
          <HoveringMenu
            menuRef={el => (this.menu = el)}
            onChange={this.onChange}
            editorState={editorState}
          />
        ) : null}
        <InlineTooltip
          inlineTooltipRef={el => (this.inlineTooltip = el)}
          isActive={InlineTooltipIsOpened(editorState)}
          isScaled={inlineTooltipScaled}
          onPlusButtonClick={this.onPlusButtonClick}
          onChange={this.onChange}
          change={editorState.change()}
        />
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
const menuIsOpened = editorState =>
  editorState.selection.isExpanded && editorState.selection.isFocused
const InlineTooltipIsOpened = editorState => {
  const { document, startBlock, startText, selection } = editorState
  const previousBlock = document.getPreviousBlock(startBlock.key)
  return (
    selection.anchor.offset === 0 &&
    previousBlock &&
    startText.text === '' &&
    startBlock.type === 'paragraph'
  )
}

export default CiriEditor
