import React from 'react'
import styled from 'styled-components'
import data from './data'

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 1fr);
`

const Logo = styled.img`
  width: 4em;
`

const SkillsGrid = () => {
  const tabSkills = data.map(item =>
    <div key={item.key}>
      <a href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Logo src={item.src}
              alt={item.name}
        />
      </a>
    </div>)

  return (
    <Container >
      {tabSkills}
    </Container>
  )
}

export default SkillsGrid
