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
    <NumberIndicator>04</NumberIndicator>
      <Fade right delay={300}>
        <MainImage style={{ width: '15em' }} fluid={data.imageOne.childImageSharp.fluid} alt='FODE Holding Page' />
      </Fade>
      <Fade bottom delay={200}>
        <TopImage fluid={data.imageTwo.childImageSharp.fluid} alt='FODE Mobile Landing Page' />
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      imageTwo: file(relativePath: { eq: "LK/rose.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `}
    render={data => <LKImage data={data} />
  }
  />
)
