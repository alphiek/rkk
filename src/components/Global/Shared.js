import styled from 'styled-components'
import { color, weight, spacing } from './variables'
import { H1 } from './textSizes'

export const HeadingText = styled(H1)`
  border-left: 0.15em solid ${color.secondary};
  padding-left: 0.2em;
  margin-bottom: 0.5em;
`

export const FullWidthWrapper = styled.div`
  width: 84%;
  margin-left: 8%;
  margin-right: 4%;
  @media only screen and (max-width: 1024px) {
    margin-top: 4em;
    padding-bottom: 5em;
  }
`
