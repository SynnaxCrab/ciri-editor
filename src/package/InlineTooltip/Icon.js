import React from 'react'
import styled from 'styled-components'

const Icon = styled.span`
  position: relative;
  top: 2px;
`

export default ({ path }) => (
  <Icon>
    <svg width="25" height="25" viewBox="0 0 25 25">
      <path d={path}></path>
    </svg>
  </Icon>
)
