import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const DrinkCard = ({ drink }) => {
  return (
    <div>
      <Card>
        <StyledLink key={drink.idDrink} to={`/drinks/${drink.idDrink}`}>
          {drink.strDrinkThumb && <DrinkImage
            src={drink.strDrinkThumb}
            alt={drink.strDrink} />}
          <DrinkTitle>{drink.strDrink}</DrinkTitle>
        </StyledLink>
      </Card>
    </div>
  )
}

const Card = styled.div`
height: 300px;
width: 300px;
background-color: white;
margin: 15px 5px 5px 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
position: relative;
color: #fff;

&:hover {
  transform: scale(1.1);
}
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: papayawhip;
  font-weight: bold;
  font-size: 20px;
`

const DrinkImage = styled.img`
  width: 300px;
  height: 300px;

  ${Card}:hover & {
    filter: drop-shadow(6px 6px 8px gray) grayscale(95%);
  }
`

const DrinkTitle = styled.p`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: #F08080;
  height: 25px;
  border: 1px dashed #fff;

  ${Card}:hover & {
    display: block;
  }
`
