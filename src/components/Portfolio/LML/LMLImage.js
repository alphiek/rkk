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
  margin-top: 2em;
`

const LMLImage = ({ data }) => {

  return (
    <>
    <LMLFlex>
      <NumberIndicator>02</NumberIndicator>
      <MainImageAnim>
        <Img
          backgroundColor={true}
          fluid={data.imageOne.childImageSharp.fluid} alt='LML landing Page' />
      </MainImageAnim>
    </LMLFlex>
    <SecondImageAnim>
      <Img
        backgroundColor={true}
        fluid={data.imageThree.childImageSharp.fluid} alt='Mobile Services view' />
    </SecondImageAnim>
    <ThirdImageAnim>
      <Img
        backgroundColor={true}
        fluid={data.imageTwo.childImageSharp.fluid} alt='Locations section' />
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
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      imageTwo: file(relativePath: { eq: "LML/areas.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      imageThree: file(relativePath: { eq: "LML/mob.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
    `}
    render={data => <LMLImage data={data} />
  }
  />
)
