import React, { Component } from 'react'
import styled from 'styled-components'

import CiriEditor from './package/CiriEditor'

const Container = styled.div`
  padding: 100px;
  line-height: 2;
  width: 42em;
  margin: auto;
`
class App extends Component {
  render() {
    return (
      <Container>
        <CiriEditor />
      </Container>
    )
  }
}

export default App;
