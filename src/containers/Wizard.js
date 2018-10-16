import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SenderAddress, ReceiverAddress, ShippingOption, Confirm, Success } from 'components'

class Wizard extends Component {
  state = {
    step: 1,
    fromName: '',
    fromStreet: '',
    fromCity: '',
    fromState: '',
    fromZip: '',
    toName: '',
    toStreet: '',
    toCity: '',
    toState: '',
    toZip: '',
    weight: null,
    shippingOption: null,
  }

  static propTypes = {}

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1,
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1,
    })
  }

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value })
  }

  render() {
    let { step } = this.state
    const {
      fromName,
      fromStreet,
      fromCity,
      fromState,
      fromZip,
      toName,
      toStreet,
      toCity,
      toState,
      toZip,
      weight,
      shippingOption,
    } = this.state
    const values = {
      fromName,
      fromStreet,
      fromCity,
      fromState,
      fromZip,
      toName,
      toStreet,
      toCity,
      toState,
      toZip,
      weight,
      shippingOption,
    }
    switch (step) {
      case 1:
        return <SenderAddress nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
      case 2:
        return (
          <ReceiverAddress
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <ShippingOption
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 4:
        return <Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values} />
      case 5:
        return <Success values={values} />
    }
  }
}

export default Wizard
