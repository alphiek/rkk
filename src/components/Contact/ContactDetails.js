import React from 'react'
import { BodyText } from '../Global/textSizes'
import { Address, AddressLink } from '../Global/MenuShared'
import SocialButtons from '../Global/SocialButtons'
import Fade from 'react-reveal/Fade'
import { contactData } from '../Copy/copy'
import styled from 'styled-components'

const ContactFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`

const ContactDetails = () => {
  return (
    <>
      {
        contactData.map(data =>
          <Fade key={data.key} bottom cascade>
             <BodyText>{data.description}</BodyText>
             <ContactFlex>
             <Address>
              {data.lineOne}
              <br />
              {data.lineTwo}
              <br />
              <AddressLink
                  href={`mailto:${data.email}`}
                  target='_blank'>
                  {data.email}
              </AddressLink>
              <br />
              <AddressLink href='tel:+447413977023'>{data.uk}</AddressLink>
              <br />
              <AddressLink href='tel:+35797694965'>{data.cy}</AddressLink>
             </Address>
             <SocialButtons />
             </ContactFlex>
           </Fade>
            )
        }
    </>
  )
}

export default ContactDetails
