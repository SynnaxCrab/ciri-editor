import React from 'react'
import styled from 'styled-components'

const icons = {
  plus: 'M20 12h-7V5h-1v7H5v1h7v7h1v-7h7',
}

const MenuWrapper = styled.div`
  margin-left: 27px;
  display: inline-block;
  opacity: ${props => props.isScaled ? 1 : 0};
`

const Menu = ({ isScaled }) => (
  <MenuWrapper isScaled={isScaled}>abcd</MenuWrapper>
)

export default Menu