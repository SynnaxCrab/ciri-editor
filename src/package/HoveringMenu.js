import React from 'react'
import Portal from 'react-portal'
import styled from 'styled-components'

import { MarkButton } from './slate-plugins/slate-mark-plugin'

const Menu = styled.div`
  padding: 8px 7px 6px;
  position: absolute;
  z-index: 1;
  margin-top: -6px;
  background-color: #222;
  border-radius: 4px;
  opacity: 0.5;
  transition: opacity 0.5s;
`
export const updateMenuPosition = (menu, editorState) => {
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

const HoveringMenu = ({ isOpened, menuRef, activeMarks, onOpen, onChange, change }) => {
  const menus = [
    { icon: 'format_bold', type: 'bold' },
    { icon: 'format_italic', type: 'italic' },
    { icon: 'format_underlined', type: 'underlined' },
    { icon: 'code', type: 'code' },
  ]

  return (
    <Portal isOpened={isOpened}>
      <Menu innerRef={menuRef}>
        {menus.map(menu => (
          <MarkButton
            key={menu.type}
            icon={menu.icon}
            type={menu.type}
            activeMarks={activeMarks}
            onChange={onChange}
            change={change}
          />),
        )}
      </Menu>
    </Portal>
  )
}

export default HoveringMenu
