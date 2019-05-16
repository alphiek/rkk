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

const LMLFlex = styled(Flex)`
  margin-bottom: 3em;
  margin-top: 2em;
`

const LMLImage = ({ data }) => {
  return (
    <>
    <LMLFlex>
    <NumberIndicator>02</NumberIndicator>
      <Fade right delay={1200}>
        <MainImage fluid={data.imageOne.childImageSharp.fluid} alt='FODE Holding Page' />
      </Fade>
      <Fade bottom delay={900}>
        <TopImage style={{width: '9.5em', position: 'absolute', left: '-2em', top: '-6.7em' }} fluid={data.imageThree.childImageSharp.fluid} alt='FODE Mobile Landing Page' />
      </Fade>
      <Fade bottom delay={900}>
        <TopImage style={{width: '10em', position: 'absolute', left: '-10em', top: '-1.3em' }} fluid={data.imageTwo.childImageSharp.fluid} alt='FODE Mobile Landing Page' />
      </Fade>
    </LMLFlex>
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query LML {
        imageOne: file(relativePath: { eq: "LML/landing.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      imageTwo: file(relativePath: { eq: "LML/areas.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(relativePath: { eq: "LML/mob.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `}
    render={data => <LMLImage data={data} />
  }
  />
)
