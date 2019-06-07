import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
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
    <NumberIndicator>03</NumberIndicator>
      <Fade right delay={300}>
        <MainImage
          style={{ width: '15em' }}
          backgroundColor={true}
          fluid={data.imageOne.childImageSharp.fluid} alt='Image of the salon' />
      </Fade>
      <Fade bottom delay={200}>
        <TopImage
          backgroundColor={true}
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
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      imageTwo: file(relativePath: { eq: "LK/rose.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    `}
    render={data => <LKImage data={data} />
  }
  />
)
