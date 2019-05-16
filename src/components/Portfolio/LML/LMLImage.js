import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import NumberIndicator from '../NumberIndicator'
import { Flex } from '../PortfolioShared'
import {
   MainImageAnim,
   SecondImageAnim,
   ThirdImageAnim
} from './LMLSpring'

const LMLFlex = styled(Flex)`
  margin-bottom: 0.5em;
  margin-top: 3em;
`

const LMLImage = ({ data }) => {

  return (
    <>
    <LMLFlex>
      <NumberIndicator>02</NumberIndicator>
      <MainImageAnim>
        <Img fluid={data.imageOne.childImageSharp.fluid} alt='FODE Holding Page' />
      </MainImageAnim>
    </LMLFlex>
    <SecondImageAnim>
      <Img fluid={data.imageThree.childImageSharp.fluid} alt='FODE Mobile Landing Page' />
    </SecondImageAnim>
    <ThirdImageAnim>
      <Img fluid={data.imageTwo.childImageSharp.fluid} alt='FODE Mobile Landing Page' />
    </ThirdImageAnim>
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query LML {
        imageOne: file(relativePath: { eq: "LML/landing.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      imageTwo: file(relativePath: { eq: "LML/areas.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(relativePath: { eq: "LML/mob.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `}
    render={data => <LMLImage data={data} />
  }
  />
)
