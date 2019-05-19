import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import { color } from '../../Global/variables'
import NumberIndicator from '../NumberIndicator'
import {
  MainImage,
  TopImage,
  Flex,
} from '../PortfolioShared'



const LKImage = ({ data }) => {
  return (
    <>
    <Flex>
    <NumberIndicator>04</NumberIndicator>
      <Fade right delay={300}>
        <MainImage
          style={{ width: '15em' }}
          backgroundColor={color.darkLink}
          fluid={data.imageOne.childImageSharp.fluid} alt='Image of the salon' />
      </Fade>
      <Fade bottom delay={200}>
        <TopImage
          backgroundColor={color.darkLink}
          fluid={data.imageTwo.childImageSharp.fluid} alt='Rose theme image' />
      </Fade>
    </Flex>
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query LK {
        imageOne: file(relativePath: { eq: "LK/lkThumb.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      imageTwo: file(relativePath: { eq: "LK/rose.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
    `}
    render={data => <LKImage data={data} />
  }
  />
)
