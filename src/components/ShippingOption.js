import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form, Input, Title, Button, Text } from '../styles/theme.js'

class ShippingOption extends React.PureComponent {
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
            name="weight"
            placeholder="Weight"
            onChange={this.props.handleChange('weight')}
            defaultValue={values.weight}
          />
          <Input
            type="text"
            name="shippingOption"
            placeholder="Shipping Option"
            onChange={this.props.handleChange('shippingOption')}
            defaultValue={values.shippingOption}
          />
          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.saveAndContinue}>Review</Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default ShippingOption
