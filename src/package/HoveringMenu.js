import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { MarkButton } from './slate-plugins/slate-mark-plugin'

const modalRoot = document.getElementById('modal-root')

const Menu = styled.div`
  padding: 8px 7px 6px;
  position: absolute;
  height: 28px;
  width: 141px;
  margin-top: -6px;
  background-color: #222;
  border-radius: 4px;
  opacity: 0.5;
  transition: opacity 0.5s;
`
const updateMenuPosition = (menu, editorState) => {
  if (!menu) return

  if (editorState.isBlurred || editorState.isEmpty) {
    menu.removeAttribute('style')
    return
  }

  const selection = window.getSelection()
  const range = selection.getRangeAt(0)
  const rect = range.getBoundingClientRect()

  menu.style.opacity = 1
  menu.style.top = `${rect.top + window.scrollY - menu.offsetHeight}px`
  menu.style.left = `${rect.left + window.scrollX - menu.offsetWidth / 2 + rect.width / 2}px`
}

class HoveringMenu extends React.Component {
  componentDidMount() {
    updateMenuPosition(this.el, this.props.editorState)
  }

  render() {
    const { onChange, editorState } = this.props
    const menus = [
      { icon: 'format_bold', type: 'bold' },
      { icon: 'format_italic', type: 'italic' },
      { icon: 'format_underlined', type: 'underlined' },
      { icon: 'code', type: 'code' },
    ]

    const selection = window.getSelection()
    const range = selection.getRangeAt(0)
    const rect = range.getBoundingClientRect()

    return (
      ReactDOM.createPortal(
        <Menu innerRef={el => this.el = el}>
          {menus.map(menu => (
            <MarkButton
              key={menu.type}
              icon={menu.icon}
              type={menu.type}
              activeMarks={editorState.activeMarks}
              onChange={onChange}
              change={editorState.change()}
            />),
          )}
        </Menu>,
        modalRoot
      )
    )
  }
}

export default HoveringMenu
