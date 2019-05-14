import React from 'react'
import styled from 'styled-components'
import { color, weight, spacing, font } from '../Global/variables'
import SocialButtons from '../Global/SocialButtons'
import Fade from 'react-reveal/Fade'
import { contactData } from '../Copy/copy'

const ContactText = styled.p`
  margin-top: 2em;
  font-size: 0.55em;
  color: ${color.body};
  font-weight: ${weight.normal};
  line-height: 130%;
`

const Address = styled.address`
  margin-top: 2em;
  font-size: 0.55em;
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
      {
        contactData.map(data =>
          <Fade key={data.key} bottom cascade>
             <ContactText>{data.description}</ContactText>
             <Address>
              {data.lineOne}
              <br />
              {data.lineTwo}
              <br />
              <a href='#www'>{data.email}</a>
              <br />
              <a href='#www'>{data.uk}</a>
              <br />
              <a href='#www'>{data.cy}</a>
             </Address>
           </Fade>
            )
           }
        <SocialButtons />
    </div>
  )
}

export default ContactDetails
