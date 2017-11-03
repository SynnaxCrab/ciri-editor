import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import Icon from './Icon'

const plus = 'M20 12h-7V5h-1v7H5v1h7v7h1v-7h7'

const Menu = styled.div`
  margin-left: 27px;
  display: inline-block;

  > {Button} {
    transform: scale(${props => props.isScaled ? 1 : 0});
  }
  transition-duration: ${props => props.isScaled ? 0.2 : 0}s;
`

export default ({ isScaled }) => (
  <Menu isScaled={isScaled}>
    <Button>
      <Icon path={plus} />
    </Button>
  </Menu>
)
