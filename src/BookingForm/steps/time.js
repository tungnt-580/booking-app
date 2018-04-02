import React, { Component } from 'react'
import styled from 'styled-components'
import { availableTimeAPI } from '../../api'

export default class TimeStep extends Component {
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
    const { date } = this.props
    const { availableTime } = this.state

    if (!date) return <Container>Please select a date!</Container>

    const { day, month, year } = date

    return (
      <Container>
        <Header>{new Date(year, month, day).toDateString()}</Header>
        {availableTime.map((range) => (
          <button
            key={range._id}
            onClick={() => {
              this.props.onChange(range._id)
              this.props.nextStep()
            }}
            disabled={range.booked}
          >
            {`${range.start}:00 -> ${range.end}:00`}
          </button>
        ))}
      </Container>
    )
  }
}

const Container = styled.div`
  text-align: center
  & > button {
    margin: 0px 10px;
  }
`

const Header = styled.header`
`
