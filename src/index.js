import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BookingForm from './BookingForm'
import registerServiceWorker from './registerServiceWorker'

class App extends Component {
  render() {
    return <BookingForm />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
