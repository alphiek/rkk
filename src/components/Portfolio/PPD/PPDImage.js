import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { color } from '../../Global/variables'
import NumberIndicator from '../NumberIndicator'
import { Flex } from '../PortfolioShared'
import {
   MainImageAnim,
   SecondImageAnim,
   ThirdImageAnim
} from './PPDSpring'

const PPDImage = ({ data }) => {
  return (
    <>
    <Flex>
      <NumberIndicator>03</NumberIndicator>
      <MainImageAnim>
        <Img
          backgroundColor={color.darkLink}
          fluid={data.imageOne.childImageSharp.fluid} alt='Landing Page Paphos Painter Decorators' />
      </MainImageAnim>
    </Flex>
    <SecondImageAnim>
      <Img
        backgroundColor={color.darkLink}
        fluid={data.imageTwo.childImageSharp.fluid} alt='Quote form' />
    </SecondImageAnim>
    <ThirdImageAnim>
      <Img
        backgroundColor={color.darkLink}
        fluid={data.imageThree.childImageSharp.fluid} alt='Services mobile view' />
    </ThirdImageAnim>
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query PPD {
        imageOne: file(relativePath: { eq: "PPD/landing.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      imageTwo: file(relativePath: { eq: "PPD/contact.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      imageThree: file(relativePath: { eq: "PPD/card.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
    `}
    render={data => <PPDImage data={data} />
  }
  />
)
