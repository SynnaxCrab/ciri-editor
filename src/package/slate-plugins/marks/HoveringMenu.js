import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'

const MaterialIcon = ({ className, ...rest }) => (
  <span className={`material-icons ${className}`} {...rest} />
)

const Icon = styled(MaterialIcon)`
  font-size: 18px;
  vertical-align: text-bottom;
`

const Button = styled.span`
  cursor: pointer;
  color: ${props =>
    props.reversed
      ? props.active
        ? 'white'
        : '#aaa'
      : props.active
        ? 'black'
        : '#ccc'};
`

const Menu = styled.div`
  & > * {
    display: inline-block;
  }

  & > * + * {
    margin-left: 15px;
  }
`

const ToolBar = styled(Menu)`
  padding: 8px 7px 6px;
  position: absolute;
  z-index: 1;
  top: -10000px;
  left: -10000px;
  margin-top: -6px;
  opacity: 0;
  background-color: #222;
  border-radius: 4px;
  transition: opacity 0.75s;
`

const MenuPortal = props => {
  const { editor, className } = props
  const root = window.document.getElementById('root')

  let menuRef = React.createRef()

  const updateMenu = () => {
    const menu = menuRef.current
    if (!menu) return

    const { fragment, selection } = editor.value

    if (selection.isBlurred || selection.isCollapsed || fragment.text === '') {
      menu.removeAttribute('style')
      return
    }

    const native = window.getSelection()
    const range = native.getRangeAt(0)
    const rect = range.getBoundingClientRect()
    menu.style.opacity = 1
    menu.style.top = `${rect.top + window.pageYOffset - menu.offsetHeight}px`

    menu.style.left = `${rect.left +
      window.pageXOffset -
      menu.offsetWidth / 2 +
      rect.width / 2}px`
  }

  useEffect(() => {
    updateMenu()
  })

  const onClickMark = (event, type) => {
    event.preventDefault()
    editor.toggleMark(type)
  }

  const renderMarkButton = (type, icon) => {
    const { value } = editor
    const isActive = value.activeMarks.some(mark => mark.type === type)

    return (
      <Button
        reversed
        active={isActive}
        onMouseDown={event => onClickMark(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    )
  }

  return ReactDOM.createPortal(
    <ToolBar className={className} ref={menuRef}>
      {renderMarkButton('bold', 'format_bold')}
      {renderMarkButton('italic', 'format_italic')}
      {renderMarkButton('underlined', 'format_underlined')}
      {renderMarkButton('code', 'code')}
    </ToolBar>,
    root,
  )
}

export default MenuPortal
