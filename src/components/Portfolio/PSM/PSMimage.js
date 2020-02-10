import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import NumberIndicator from '../NumberIndicator'
import { Flex } from '../PortfolioShared'
import {
   MainImageAnim,
   SecondImageAnim,
   ThirdImageAnim
} from './PSMspring'

const PSMImage = ({ data }) => {
  return (
    <>
    <Flex>
      <NumberIndicator>02</NumberIndicator>
      <MainImageAnim>
        <Img
          backgroundColor={true}
          fluid={data.imageOne.childImageSharp.fluid} alt='Landing Page Paphos Stone Masons' />
      </MainImageAnim>
    </Flex>
    <SecondImageAnim>
      <Img
        backgroundColor={true}
        fluid={data.imageTwo.childImageSharp.fluid} alt='Quote form' />
    </SecondImageAnim>
    <ThirdImageAnim>
      <Img
        backgroundColor={true}
        fluid={data.imageThree.childImageSharp.fluid} alt='Icon set' />
    </ThirdImageAnim>
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query PPD {
        imageOne: file(relativePath: { eq: "PSM/landing.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      imageTwo: file(relativePath: { eq: "PSM/form.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageThree: file(relativePath: { eq: "PSM/icons.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    `}
    render={data => <PSMImage data={data} />
  }
  />
)
