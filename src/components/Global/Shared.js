import styled from 'styled-components'
import { color } from './variables'
import { H1 } from './textSizes'

export const HeadingText = styled(H1)`
  border-left: 0.15em solid ${color.secondary};
  padding-left: 0.2em;
  margin-bottom: 0.5em;
  @media only screen and (max-width: 824px) {
    margin-bottom: 0.75em;
  }
  @media only screen and (max-width: 570px){
    margin-bottom: 1em;
  }
`

export const FullWidthWrapper = styled.div`
  width: 84%;
  margin-left: 8%;
  margin-right: 4%;
  @media only screen and (max-width: 1024px) {
    margin-top: 5em;
    padding-bottom: 5em;
  }
  @media only screen and (max-width: 570px) {
    margin-top: 6em;
  }
`
export const ServicesWrapper = styled.div`
  margin-bottom: 0.8em;
  @media only screen and (max-width: 1024px) {
    margin-bottom: 2em;
  }
  @media only screen and (max-width: 824px){
    margin-bottom: 2.5em;
  }

  @media only screen and (max-width: 570px){
    margin-bottom: 3em;
  }

`
export const MobileWidthWrapper = styled.div`
@media only screen and (max-width: 570px) {
    padding: 0 1em;
  }
`
