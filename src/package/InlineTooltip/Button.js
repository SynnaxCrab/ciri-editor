import styled, { css } from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  border: 1px solid;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  line-height: 30px;
  padding: 0;
  background-color: white;
  transition: transform .2s ease-out;

  ${ props => props.isScaled && css`
    transform: rotate(45deg);
  `};

  &:focus {
    outline:0;
  }
`

export default Button