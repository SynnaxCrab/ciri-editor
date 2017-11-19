import React from 'react'
import styled from 'styled-components'

import AddImageButton from './AddImageButton'
import AddSeparatorButton from './AddSeparatorButton'

const Menu = styled.div`
  margin-left: 27px;
  display: inline-block;

  > {Button} {
    transform: scale(${props => props.isScaled ? 1 : 0});
  }
  transition-duration: ${props => props.isScaled ? 0.2 : 0}s;
`

export default ({ isScaled, change, onChange }) => (
  <Menu isScaled={isScaled}>
    {[AddImageButton, AddSeparatorButton].map(
      Button => <Button onChange={onChange} change={change} />
    )}
  </Menu>
)
