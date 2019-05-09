import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import {
  MainImage,
  TopImage,
  Flex,
  PageIndicator,
} from '../PortfolioShared'

const LeftImage = styled(TopImage)`
  width: 12.5vw;
  margin-top: 9em;
  margin-left: -9em;
  z-index: 300;
`
const RightImage = styled(TopImage)`
width: 13em;
margin-right: -5em;
margin-top: -6.5em;
`

const ForagerImage = ({ data }) => {
  return (
    <>
    <Flex>
      <PageIndicator>06</PageIndicator>
      <Fade right delay={1200}>
        <MainImage fluid={data.imageOne.childImageSharp.fluid} alt='Forager Search Box' />
      </Fade>
      <Fade bottom delay={900}>
        <RightImage fluid={data.imageTwo.childImageSharp.fluid} alt='Sample Forager Icons' />
      </Fade>
      <Fade bottom delay={900}>
        <LeftImage fluid={data.imageThree.childImageSharp.fluid} alt='Forager Results UI' />
      </Fade>
    </Flex>
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      imageTwo: file(relativePath: { eq: "Forager/icons.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(relativePath: { eq: "Forager/ui.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `}
    render={data => <ForagerImage data={data} />
  }
  />
)
