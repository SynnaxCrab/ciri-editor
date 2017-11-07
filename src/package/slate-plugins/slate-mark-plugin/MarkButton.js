import React from 'react'
import styled from 'styled-components'

import { toggleMark, hasMark } from './MarkHelpers'

const Button = styled.span`
  display: inline-block;
  + * {
    margin-left: 15px;
  }
  color: ${props => props.isActive ? '#fff' : '#aaa'};
  cursor: pointer;
`

const MaterialIcon = ({ children } ) => (
  <span className='material-icons'>{children}</span>
)

const Icon = styled(MaterialIcon)`
  font-size: 18px;
  vertical-align: text-bottom;
`

const MarkButton = ({ type, icon, activeMarks, onChange, change }) => (
  <Button
    onMouseDown={event => {
      event.preventDefault()
      onChange(toggleMark(type, change))
    }}
    isActive={hasMark(type, activeMarks)}
  >
    <Icon>{icon}</Icon>
  </Button>
)

export default MarkButton
