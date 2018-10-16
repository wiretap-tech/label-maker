import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import styled from 'styled-components'
import { Form, Input, Title, Button, Text } from '../styles/theme.js'

const Intro = styled.p`
  font-size: large;
  background-color: black;
  padding: 5px;
  color: white;
  width: 300px;
  text-align: center;
  margin: auto;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: 'Raleway', sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`

function Confirm({ nextStep, prevStep, values }) {
  return (
    <React.Fragment>
      <Title>Review</Title>
      <Intro>Sender Details</Intro>
      <Form>
        <Label>Name: {values.fromName}</Label>
        <Label>Street: {values.fromStreet}</Label>
        <Label>City: {values.fromCity}</Label>
        <Label>Zip: {values.fromZip}</Label>
      </Form>
      <Intro>Receiver Details</Intro>
      <Form>
        <Label>Name: {values.toName}</Label>
        <Label>Street: {values.toStreet}</Label>
        <Label>City: {values.toCity}</Label>
        <Label>Zip: {values.toZip}</Label>
      </Form>
      <Intro>Shipping Options</Intro>
      <Form>
        <Label>Weight: {values.weight}</Label>
        <Label>Shipping: {values.shippingOption}</Label>
        <Button onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Confirm</Button>
      </Form>
    </React.Fragment>
  )
}

Confirm.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
}

export default pure(Confirm)
