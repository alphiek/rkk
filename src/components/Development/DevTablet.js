import React from 'react'
import styled from 'styled-components'
import data from './data'

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 1fr);
`
const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Logo = styled.img`
  padding: 0.4em;
`

const SkillsGrid = () => {
  const tabSkills = data.map(item =>
    <GridItem key={item.key}>
      <a href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Logo src={item.src}
              alt={item.name}
              style={{width: item.width }}
        />
      </a>
    </GridItem>)

  return (
    <Container >
      {tabSkills}
    </Container>
  )
}

export default SkillsGrid
