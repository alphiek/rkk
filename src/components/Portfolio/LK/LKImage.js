import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import {
  MainImage,
  TopImage,
  Flex,
  PageIndicator,
} from '../PortfolioShared'



const LKImage = ({ data }) => {
  return (
    <>
    <Flex>
      <PageIndicator>04</PageIndicator>
      <Fade right delay={1200}>
        <MainImage style={{ width: '15em' }} fluid={data.imageOne.childImageSharp.fluid} alt='FODE Holding Page' />
      </Fade>
      <Fade bottom delay={900}>
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
