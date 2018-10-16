import React, { Component } from 'react'
import { Wizard } from 'containers'
import { Header } from 'components'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Wizard />
      </Container>
    )
  }
}

export default App
