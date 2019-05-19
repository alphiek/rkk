import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.5em;
  margin-bottom: 0.8em;
`
export const InputWrapper = styled.input`
  border: 0.17em solid ${color.secondary};
  width: 100%;
  margin-top: 0.7em;
  margin-bottom: 0.7em;
  padding: 0.7em;
  background: #f9f9f9;
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
  background: #f9f9f9;
  padding: 0.5em 0.1em;
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
  background-color: #f9f9f9;
`
export const ErrorMessage = styled.p`
  margin-bottom: 0.5em;
  font-size: 0.45em;
  line-height: 140%;
  color: red;
  float: right;
  text-align: right;
  width: 65%;
`
export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
   margin: 0.9em;
   float: right;
   opacity: 0;
   z-index: 200;
`

export const CustomCheckbox = styled.div`
  border: 0.08em solid ${color.secondary};
  float: right;
  height: 1.5em;
  width: 1.5em;
  position: relative;
`

export const Icon = styled.svg`
  fill: none;
  stroke: ${color.primary};
  stroke-width: 2px;
  position: absolute;
`

export const ConsentText = styled.p`
  float: left;
  width: 80%;
  font-size: 0.5em;
  line-height: 130%;
  color: ${color.darkLink};
  margin-bottom: 1em;
`

export const Submit = styled.button`
  margin-top: 1em;
  height: 5em;
  background: ${color.primary};
  border: 0.2em solid ${color.secondary};
  color: white;
  font-family: ${font.heebo};
  font-weight: ${weight.bold};
  letter-spacing: ${spacing.wide};
  text-transform: uppercase;
  font-size: 0.6em;
  transition: 300ms;
  &: hover {
    box-shadow: 21px 21px 24px -10px rgba(0,0,0,.15);
  }
  @media only screen and (max-width: 570px) {
    margin-top: 3em;
  }
`
