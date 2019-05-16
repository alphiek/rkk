import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import NumberIndicator from '../NumberIndicator'
import {
  Flex,
} from '../PortfolioShared'
import {
   MainImageAnim,
   SecondImageAnim,
} from './SCCSpring'

const SCCImage = ({ data }) => {
  return (
    <>
    <Flex>
    <NumberIndicator>05</NumberIndicator>
      <MainImageAnim>
        <Img fluid={data.imageOne.childImageSharp.fluid} alt='FODE Holding Page' />
      </MainImageAnim>
    </Flex>
    <SecondImageAnim>
      <Img fluid={data.imageTwo.childImageSharp.fluid} alt='FODE Mobile Landing Page' />
    </SecondImageAnim>
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query SCC {
        imageOne: file(relativePath: { eq: "SCC/Southcoach.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      imageTwo: file(relativePath: { eq: "SCC/contact.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `}
    render={data => <SCCImage data={data} />
  }
  />
)
