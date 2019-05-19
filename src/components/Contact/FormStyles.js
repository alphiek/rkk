import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.5em;
  margin-bottom: 0.8em;
  @media only screen and (max-width: 570px) {
    margin-top: 0;
  }
`
export const InputWrapper = styled.input`
  border: 0.17em solid ${color.secondary};
  width: 100%;
  margin-top: 0.7em;
  margin-bottom: 0.7em;
  padding: 0.7em;
  background: #f9f9f9;
  @media only screen and (max-width: 1024px) {
    padding: 1em;
  }
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
  font-size: calc(0.4em + 0.1vw);
  background: ${color.offWhite};
  padding: 0.5em 0.1em;
  @media only screen and (max-width: 1024px) {
   top: -0.2em;
   margin-bottom: 0.60em;
   font-size: calc(0.4em + 0.5vw);
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.4em + 0.65vw);
  }

  @media only screen and (max-width: 570px){
    font-size: calc(0.4em + 1.6vw);
  }
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
  font-size: calc(0.39em + 0.08vw);
  line-height: 140%;
  color: red;
  float: right;
  text-align: right;
  width: 65%;
  @media only screen and (max-width: 1024px) {
   top: -0.2em;
   margin-bottom: 0.60em;
   font-size: calc(0.39em + 0.5vw);
   width: 70%;
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.39em + 0.65vw);
  }

  @media only screen and (max-width: 570px){
    font-size: calc(0.39em + 1.3vw);
  }
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
  @media only screen and (max-width: 824px){
    border: 0.12em solid ${color.secondary};
    width: 2em;
    height: 2em;
  }
  @media only screen and (max-width: 570px){
    width: 2.5em;
    height: 2.5em;
  }
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
  font-size: calc(0.4em + 0.3vw);
  line-height: 130%;
  color: ${color.darkLink};
  margin-bottom: 1em;
  @media only screen and (max-width: 1024px) {
   top: -0.2em;
   margin-top: 0.60em;
   font-size: calc(0.4em + 0.5vw);
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.4em + 0.8vw);
  }

  @media only screen and (max-width: 570px){
    font-size: calc(0.35em + 1.6vw);
  }
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
  font-size: calc(0.5em + 0.1vw);
  transition: 300ms;
  &: hover {
    box-shadow: 21px 21px 24px -10px rgba(0,0,0,.15);
  }
  @media only screen and (max-width: 1024px) {
   font-size: calc(0.5em + 0.5vw);
   height: 5.5em;
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.5em + 0.8vw);
    height: 5em;
  }

  @media only screen and (max-width: 570px){
    font-size: calc(0.5em + 1.6vw);
    margin-top: 1em;
  }
`
