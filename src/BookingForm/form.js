import React, { Component } from 'react'
import styled from 'styled-components'

export default class Form extends Component {
  state = {
    currentIndex: this.props.defaultStep
  }

  render() {
    const { steps } = this.props
    const { currentIndex } = this.state
    const currentStep = steps[currentIndex]

    return (
      <Container>
        <Header>
          {steps.map((step, index) => (
            <Title
              key={index}
              onClick={() => this.setState({ currentIndex: index })}
              style={{ fontWeight: currentIndex ===  index ? 'bold' : 'normal' }}>
              {step.title}
            </Title>
          ))}
        </Header>
        <Main>
          {currentStep.render({
            nextStep: () => this.setState((prevState) => ({ currentIndex: prevState.currentIndex + 1 })),
            preStep: () => this.setState((prevState) => ({ currentIndex: prevState.currentIndex - 1 })),
          })}
        </Main>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 500px;
  margin: auto;
`

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const Title = styled.span`
  margin-right: 10px;
  font-weight: normal;
`

const Main = styled.main`
  padding-top: 20px;
`
