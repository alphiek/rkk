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
    <NumberIndicator>04</NumberIndicator>
      <MainImageAnim>
        <Img
          backgroundColor={true}
          fluid={data.imageOne.childImageSharp.fluid} alt='Minibus' />
      </MainImageAnim>
    </Flex>
    <SecondImageAnim>
      <Img
        backgroundColor={true}
        fluid={data.imageTwo.childImageSharp.fluid} alt='Quick quote button' />
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
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      imageTwo: file(relativePath: { eq: "SCC/contact.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    `}
    render={data => <SCCImage data={data} />
  }
  />
)
