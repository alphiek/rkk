import React from "react"
import { BodyText } from "../Global/textSizes"
import { Address, AddressLink } from "../Global/MenuShared"
import SocialButtons from "../Global/SocialButtons"
import Fade from "react-reveal/Fade"
import { contactData } from "../Copy/copy"
import styled from "styled-components"

const ContactFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 0.5em;
  }
`

const ContactDetails = () => {
  return (
    <>
      {contactData.map(data => (
        <Fade key={data.key} cascade>
          <div>
            <BodyText>{data.description}</BodyText>
            <BodyText>{data.subtext}</BodyText>
          </div>
          <ContactFlex>
            <Address>
              <AddressLink href={`mailto:${data.email}`} target="_blank">
                {data.email}
              </AddressLink>
              <AddressLink
                href="https://api.whatsapp.com/send?phone=+27799435277"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.uk}
              </AddressLink>
            </Address>
          </ContactFlex>
          <SocialButtons />
        </Fade>
      ))}
    </>
  )
}

export default ContactDetails
