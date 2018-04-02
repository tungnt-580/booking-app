import React, { Component } from 'react'
import styled from 'styled-components'
import Form from './form'
import DateStep from './steps/date'
import TimeStep from './steps/time'
import Confirm from './steps/confirm'

export default class BookingForm extends Component {
  state = {
    date: null,
    timeIndex: null
  }

  render() {
    const { date, timeIndex } = this.state
    const steps = [
      {
        title: 'Select date',
        render: ({ nextStep }) => (
          <DateStep
            selected={date}
            nextStep={nextStep}
            onChange={(value) => this.setState({ date: value })}
          />
        )
      },
      {
        title: 'Choose available time',
        render: ({ nextStep }) => (
          <TimeStep
            date={date}
            selected={timeIndex}
            nextStep={nextStep}
            onChange={(value) => this.setState({ timeIndex: value })}
          />
        )
      },
      {
        title: 'Confirm',
        render: () => <Confirm {...this.state} />
      }
    ]

    return (
      <Form steps={steps} defaultStep={0} />
    )
  }
}
