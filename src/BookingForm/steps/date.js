import React, { Component } from 'react'
import styled from 'styled-components'

export default class DateStep extends Component {
  state = {
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  }

  increase = () =>   {
    this.setState((prevState) =>
      prevState.month < 11 ?
      { month: prevState.month + 1, year: prevState.year } :
      { month: 0, year: prevState.year + 1 }
    )
  }

  decrease = () => {
    this.setState((prevState) =>
      prevState.month > 0 ?
      { month: prevState.month - 1, year: prevState.year } :
      { month: 0, year: prevState.year - 1 }
    )
  }

  render() {
    const { month, year } = this.state
    const numberOfDays = new Date(year, month + 1, 0).getDate()

    return (
      <Container>
        <Header>
          <button onClick={this.decrease}>{'<'}</button>
          { monthNames[month] + ' ' + year }
          <button onClick={this.increase}>{'>'}</button>
        </Header>
        <Days>
          {arrayFrom0To(7).map((day) => <Item key={day}>{dayNames[day]}</Item>)}
          {arrayFrom0To(new Date(year, month, 1).getDay()).map((day) => <Item key={day}></Item>)}
          {arrayFrom0To(numberOfDays).map((day) => {
            day = day + 1
            return <Item
              key={day}
              onClick={() => {
                this.props.onChange({ day, month, year })
                this.props.nextStep()
              }}
            >
              { day }
            </Item>
          })}
        </Days>
      </Container>
    )
  }
}

function arrayFrom0To(value) {
  return Array.from(Array(value).keys() )
}

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'Decmeber']

const Container = styled.div`
`

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Days = styled.div`
  display: flex;
  justify-content: 'space-around';
  flex-wrap: wrap;
`

const Item = styled.span`
  flex-basis: 14.28%;
  text-align: center;
`
