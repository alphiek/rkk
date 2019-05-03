import React from 'react'
import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'


export const Back = styled.div`
  margin-top: 2em;
  width: 100%;
  text-align: right;
`

export const BackText = styled.p`
  line-height: 100%;
  font-family: ${font.heebo};
  font-weight: ${weight.bold};
  letter-spacing: ${spacing.wide};
  color: ${color.primary};
  text-transform: uppercase;
  font-size: 0.5em;
`


const BackButton = (props) => {
  return (
    <Back onClick={props.toggleForm}>
    {
      props.form ?
      <BackText>Back to Contact Details</BackText>
      :
      <BackText>Contact Form</BackText>
    }
    </Back>
  )
}

export default BackButton
