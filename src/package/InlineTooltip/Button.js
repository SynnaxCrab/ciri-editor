import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  border: 1px solid;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  line-height: 30px;
  padding: 0;
  background-color: white;

  &:focus {
    outline:0;
  }
`

export default Button
