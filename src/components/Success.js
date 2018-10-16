import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form, Input, Title, Button, Text } from '../styles/theme.js'

const ShippingLabel = styled.div`
  width: 300px;
  color: #333;
  font-family: 'Raleway', sans-serif;
  font-size: 0.9em;
  line-height: 18px;
  margin: auto;
  padding: 10px;
  border: solid 1px #333;
  background-color: #eee;
  text-align: left;
`

function Success({ values }) {
  return (
    <React.Fragment>
      <Title>Success</Title>
      <Text>Print your shipping order details below</Text>
      <ShippingLabel>
        {values.toName}<br />
        {values.toStreet}<br />
        {values.toCity}, {values.toState} {values.toZip}
      </ShippingLabel>
    </React.Fragment>
  )
}

Success.propTypes = {
  values: PropTypes.object.isRequired,
}

export default Success
