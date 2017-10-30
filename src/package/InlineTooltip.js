import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const modalRoot = document.getElementById('modal-root')

const icons = {
  plus: 'M20 12h-7V5h-1v7H5v1h7v7h1v-7h7',
}

const Icon = props => (
  <svg width="25" height="25" viewBox="0 0 25 25">
    <path d={icons[props.icon]}></path>
  </svg>
)

const IconWrapper = styled.span`
  position: relative;
  top: 2px;
`

const Button = styled.button`
  border: 1px solid;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  line-height: 30px;
  padding: 0;
  background-color: white;
`

const Tooltip = styled.div`
  position: absolute;
  margin-left: -18px;
  margin-top: -6px;
  padding: 0;
  width: 40px;
  height: 40px;
  z-index: 400;
  opacity: 1;
  transition: visibility 0s linear 0s, opacity 300ms;
`

const InlineTooltip = ({ inlineTooltipRef }) => (
  ReactDOM.createPortal(
    <Tooltip innerRef={inlineTooltipRef}>
      <Button>
        <IconWrapper>
          <Icon icon='plus' />
        </IconWrapper>
      </Button>
    </Tooltip>,
    modalRoot
  )
)

export const updateInlineTooltipPosition = (inlineTooltip, editorState) => {
  if (!inlineTooltip) return

  const selection = window.getSelection()
  const range = selection.getRangeAt(0)
  const rect = range.getBoundingClientRect()

  inlineTooltip.style.opacity = 1
  inlineTooltip.style.top = `${rect.top + window.scrollY}px`
  inlineTooltip.style.left = `${rect.left + window.scrollX - 40}px`
}

export default InlineTooltip
