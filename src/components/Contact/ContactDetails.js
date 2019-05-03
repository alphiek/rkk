import React from 'react'
import styled from 'styled-components'
import { color, weight, spacing, font } from '../Global/variables'
import SocialButtons from '../Header/SocialButtons'

const ContactText = styled.p`
  margin-top: 2em;
  font-size: 0.65em;
  color: ${color.body};
  font-weight: ${weight.light};
  line-height: 130%;
`

const Address = styled.address`
  margin-top: 2em;
  font-size: 0.65em;
  color: ${color.body};
  font-weight: ${weight.light};
  line-height: 150%;
  font-style: normal;
  font-family: ${font.heebo};
  letter-spacing: ${spacing.large};
`


const ContactDetails = () => {
  return (
    <div>
     <ContactText>Have a project in mind? give us a call to discuss or click the link below to complete our contact form and we will be in touch</ContactText>
     <Address>
      Koili, Paphos
      <br />
      Cyprus
      <br />
      <a>Email: info@rkkcreative.xyz</a>
      <br />
      <a>UK: +44 64664 64564645</a>
      <br />
      <a>CY: +357 6546545</a>
     </Address>
      <SocialButtons />
    </div>
  )
}

export default ContactDetails
