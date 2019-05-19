import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import NumberIndicator from '../NumberIndicator'
import { color } from '../../Global/variables'
import { Flex } from '../PortfolioShared'
import {
   MainImageAnim,
   SecondImageAnim,
   ThirdImageAnim
} from './ForagerSpring'

const ForagerImage = ({ data }) => {
  return (
    <>
    <Flex>
      <NumberIndicator>06</NumberIndicator>
      <MainImageAnim>
        <Img
          backgroundColor={color.darkLink}
          fluid={data.imageOne.childImageSharp.fluid} alt='Forager Search Box' />
      </MainImageAnim>
    </Flex>
    <SecondImageAnim>
      <Img
         backgroundColor={color.darkLink}
         fluid={data.imageTwo.childImageSharp.fluid} alt='Sample Forager Icons' />
    </SecondImageAnim>
    <ThirdImageAnim>
      <Img
        backgroundColor={color.darkLink}
        fluid={data.imageThree.childImageSharp.fluid} alt='Forager Results UI' />
    </ThirdImageAnim>
  </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query Forager {
        imageOne: file(relativePath: { eq: "Forager/search.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      imageTwo: file(relativePath: { eq: "Forager/icons.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      imageThree: file(relativePath: { eq: "Forager/ui.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
    `}
    render={data => <ForagerImage data={data} />
  }
  />
)
