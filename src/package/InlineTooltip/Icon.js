import React from 'react'
import styled from 'styled-components'

const Icon = styled.span`
  position: relative;
  top: 2px;
`

export default ({ paths }) => (
  <Icon>
    <svg width="25" height="25" viewBox="0 0 25 25">
      <g fillRule="evenodd">
        {paths.map((path, index) => <path key={index} d={path}></path>)}
      </g>
    </svg>
  </Icon>
)
