import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

import {
  FodeThumbnail,
  LMLThumbnail,
  PPDThumbnail,
  LKThumbnail,
  SCCThumbnail,
  ForagerThumbnail
  } from './Thumbnails'

const Container = styled.div`
  margin-top: 1em;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 824px){
   grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 570px){
   grid-template-columns: repeat(1, 1fr);
   grid-row-gap: 1.5em;
  }
`

const GridContainer = ({ images, onClickToggle, grid }) => {
  return(
    <>
    {
      grid ?
      <Container>
        <Fade bottom>
          <FodeThumbnail
            thumb={images.imageOne.childImageSharp.fluid}
            onClickToggle={onClickToggle}
          />
        </Fade>
        <Fade bottom delay={25}>
          <LMLThumbnail
            thumb={images.imageTwo.childImageSharp.fluid}
            onClickToggle={onClickToggle}
          />
        </Fade>
        <Fade bottom delay={50}>
          <PPDThumbnail
          thumb={images.imageThree.childImageSharp.fluid}
          onClickToggle={onClickToggle}
          />
        </Fade>
        <Fade bottom delay={75}>
          <LKThumbnail
          thumb={images.imageFour.childImageSharp.fluid}
          onClickToggle={onClickToggle}
          />
        </Fade>
        <Fade bottom delay={100}>
          <SCCThumbnail
          thumb={images.imageFive.childImageSharp.fluid}
          onClickToggle={onClickToggle}
          />
        </Fade>
        <Fade bottom delay={125}>
          <ForagerThumbnail
          thumb={images.imageSix.childImageSharp.fluid}
          onClickToggle={onClickToggle}
          />
        </Fade>
      </Container>
      :
      null
    }
    </>
  )
}

export default GridContainer

GridContainer.propTypes = {
  images: PropTypes.object.isRequired,
  onClickToggle: PropTypes.func.isRequired,
  grid: PropTypes.bool.isRequired
}
