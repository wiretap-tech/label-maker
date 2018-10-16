import styled from 'styled-components'

// Forms, inputs, buttons

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`

export const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`

export const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  background-color: rebeccapurple;
  color: #fff;
  border-radius: 3px;
`

// Text

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  color: rebeccapurple;
  font-size: 2.2em;
`

export const Title2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${(props) => props.color || '#4d4d4d'};
`
