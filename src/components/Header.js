import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <HeaderSection>
      <HeaderTitle>The cock<span role="img" aria-label="cocktail">🍸</span>ail app</HeaderTitle>
    </HeaderSection>
  )
}

const HeaderSection = styled.header`
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
`

const HeaderTitle = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
  color: #F08080;
  padding: 20px;

  @media (max-width: 700px) {
    font-size: 40px;
  }
`