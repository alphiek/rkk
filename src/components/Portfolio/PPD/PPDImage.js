import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
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
        <Img fluid={data.imageOne.childImageSharp.fluid} alt='FODE Holding Page' />
      </MainImageAnim>
    </Flex>
    <SecondImageAnim>
      <Img fluid={data.imageTwo.childImageSharp.fluid} alt='FODE Mobile Landing Page' />
    </SecondImageAnim>
    <ThirdImageAnim>
      <Img fluid={data.imageThree.childImageSharp.fluid} alt='FODE Mobile Landing Page' />
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      imageTwo: file(relativePath: { eq: "PPD/contact.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(relativePath: { eq: "PPD/card.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `}
    render={data => <PPDImage data={data} />
  }
  />
)
