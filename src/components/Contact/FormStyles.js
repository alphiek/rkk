import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 0.8em;
`
export const InputWrapper = styled.input`
  border: 0.17em solid ${color.secondary};
  width: 100%;
  margin-top: 0.7em;
  margin-bottom: 0.7em;
  padding: 0.7em;
`
export const Placeholder = styled.p`
  position: absolute;
  top: -0.1em;
  left: 0.8em;
  line-height: 100%;
  font-family: ${font.heebo};
  font-weight: ${weight.bold};
  letter-spacing: ${spacing.wide};
  color: ${color.primary};
  text-transform: uppercase;
  font-size: 0.5em;
  background: white;
  padding: 0.5em;
`
export const Label = styled.label`
  position: relative;
`
export const Message = styled.textarea`
  border: 0.17em solid ${color.secondary};
  margin-top: 0.7em;
  margin-bottom: 0.7em;
  padding: 0.7em;
  width: 100%;
`
export const ErrorMessage = styled.p`
  font-size: 0.5em;
  line-height: 140%;
  color: red;
`
export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
   margin-top: 2em;
   float: right;
`

export const ConsentText = styled.p`
  float: left;
  width: 80%;
  font-size: 0.6em;
  line-height: 130%;
  color: ${color.grey};
  margin-bottom: 1em;
`

export const Submit = styled.button`
  height: 2em;
`
