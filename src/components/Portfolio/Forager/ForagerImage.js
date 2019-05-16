import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import NumberIndicator from '../NumberIndicator'
import {
  MainImage,
  TopImage,
  Flex,
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
    <NumberIndicator>06</NumberIndicator>
      <Fade right delay={300}>
        <MainImage fluid={data.imageOne.childImageSharp.fluid} alt='Forager Search Box' />
      </Fade>
      <Fade bottom delay={200}>
        <RightImage fluid={data.imageTwo.childImageSharp.fluid} alt='Sample Forager Icons' />
      </Fade>
      <Fade bottom delay={200}>
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
