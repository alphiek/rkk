import React from 'react'
import styled from 'styled-components'
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
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);
`

const GridContainer = ({ images, onClickToggle }) => {
  return(
    <Container>
      <FodeThumbnail
        thumb={images.imageOne.childImageSharp.fluid}
        onClickToggle={onClickToggle}
      />
      <LMLThumbnail
        thumb={images.imageTwo.childImageSharp.fluid}
        onClickToggle={onClickToggle}
      />
      <PPDThumbnail
      thumb={images.imageThree.childImageSharp.fluid}
      onClickToggle={onClickToggle}
      />
      <LKThumbnail
      thumb={images.imageFour.childImageSharp.fluid}
      onClickToggle={onClickToggle}
      />
      <SCCThumbnail
      thumb={images.imageFive.childImageSharp.fluid}
      onClickToggle={onClickToggle}
      />
      <ForagerThumbnail
      thumb={images.imageSix.childImageSharp.fluid}
      onClickToggle={onClickToggle}
      />
    </Container>
  )
}

export default GridContainer

GridContainer.propTypes = {
  images: PropTypes.object.isRequired,
  onClickToggle: PropTypes.func.isRequired
}
