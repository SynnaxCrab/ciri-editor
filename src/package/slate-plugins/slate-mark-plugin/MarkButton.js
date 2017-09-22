import React from 'react'
import styled from 'styled-components'

import { markStrategy, hasMark } from './MarkUtils'

const Button = styled.span`
  display: inline-block;
  + * {
    margin-left: 15px;
  }
  color: #ccc;
  cursor: pointer;
`

const MaterialIcon = ({ children }: Props) => (
  <span className='material-icons'>{children}</span>
)

const Icon = styled(MaterialIcon)`
  font-size: 18px;
  vertical-align: text-bottom;
`

const MarkButton = ({ type, icon, activeMarks, onChange, change }) => (
  <Button
    onClick={event => {
      event.preventDefault()
      onChange(markStrategy(type, change))
    }}
    isActive={hasMark(type, activeMarks)}
  >
    <Icon>{icon}</Icon>
  </Button>
)

export default MarkButton
