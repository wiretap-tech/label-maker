import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form, Input, Title, Button, Text } from '../styles/theme.js'

class ReceiverAddress extends React.Component {
  saveAndContinue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const { values } = this.props
    return (
      <React.Fragment>
        <Title>Receiver Address</Title>
        <Form>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.props.handleChange('toName')}
            defaultValue={values.toName}
          />
          <Input
            type="text"
            name="street"
            placeholder="Street"
            onChange={this.props.handleChange('toStreet')}
            defaultValue={values.toStreet}
          />
          <Input
            type="text"
            name="city"
            placeholder="City"
            onChange={this.props.handleChange('toCity')}
            defaultValue={values.toCity}
          />
          <Input
            type="text"
            name="state"
            placeholder="State"
            onChange={this.props.handleChange('toState')}
            defaultValue={values.toState}
          />
          <Input
            type="text"
            name="zip"
            placeholder="Zip"
            onChange={this.props.handleChange('toZip')}
            defaultValue={values.toZip}
          />
          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.saveAndContinue}>Next</Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default ReceiverAddress
