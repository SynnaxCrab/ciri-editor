import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import Icon from './Icon'

const plus = 'M20 12h-7V5h-1v7H5v1h7v7h1v-7h7'

const Menu = styled.div`
  margin-left: 27px;
  display: inline-block;
  opacity: ${props => props.isScaled ? 1 : 0};
`
const ItemButton = Button.extend`
  transform: ${props => props.isScaled ? 'scale(1)' : 'scale(0)'};
  transition-duration: .2s;
`
export default ({ isScaled }) => (
  <Menu isScaled={isScaled}>
    <ItemButton isScaled={isScaled}>
      <Icon path={plus} />
    </ItemButton>
  </Menu>
)
