import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form, Input, Title, Button, Text } from '../styles/theme.js'

class SenderAddress extends React.PureComponent {
  static propTypes = {}

  saveAndContinue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { values } = this.props
    return (
      <React.Fragment>
        <Title>Sender Address</Title>
        <Form>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.props.handleChange('fromName')}
            defaultValue={values.fromName}
          />
          <Input
            type="text"
            name="street"
            placeholder="Street"
            onChange={this.props.handleChange('fromStreet')}
            defaultValue={values.fromStreet}
          />
          <Input
            type="text"
            name="city"
            placeholder="City"
            onChange={this.props.handleChange('fromCity')}
            defaultValue={values.fromCity}
          />
          <Input
            type="text"
            name="state"
            placeholder="State"
            onChange={this.props.handleChange('fromState')}
            defaultValue={values.fromState}
          />
          <Input
            type="text"
            name="zip"
            placeholder="Zip"
            onChange={this.props.handleChange('fromZip')}
            defaultValue={values.fromZip}
          />
          <Button onClick={this.saveAndContinue}>Next</Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default SenderAddress
