import React, { Component } from 'react'
import styled from 'styled-components'
import { availableTimeAPI } from '../../api'


export default class Confirm extends Component {
  state = {
    availableTime: []
  }

  componentDidMount() {
    const { date } = this.props

    if (date) {

      const { day, month, year } = date

      availableTimeAPI.getByDate(day, month, year)
        .then(result => this.setState({ availableTime: result }))
    }
  }

  render() {
    const { date, timeIndex } = this.props
    const { availableTime } = this.state

    if (timeIndex === null) return <Container>Please choose an available time!</Container>

    const { day, month, year } = date

    return (
      <Container>
        <Header>{new Date(year, month, day).toDateString()}</Header>
        <Header>
          {availableTime[timeIndex] ?
            `${availableTime[timeIndex].start}:00 -> ${availableTime[timeIndex].end}:00`:
            'Loading...'
          }
        </Header>
        <button onClick={() => {
            availableTimeAPI.book(day, month, year, timeIndex).then((result) => {
              console.log(result)
              alert('Book successfully')
            })
        }}>Book</button>
      </Container>
    )
  }
}

const Container = styled.div`
  text-align: center
`

const Header = styled.header`
`
