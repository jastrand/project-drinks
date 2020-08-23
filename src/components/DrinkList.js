import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDrinks } from 'reducers/drinks'
import { DrinkCard } from 'components/DrinkCard'
import styled from 'styled-components'
import { Dropdown } from 'components/Dropdown'

export const DrinkList = () => {
  const { category } = useParams()
  const dispatch = useDispatch()
  const drinks = useSelector((state) => state.drinks.drinkData)
  const [category, setCategory] = useState('Cocktail')

  const chosenCategory = cat => {
    setCategory(cat)
  }

  useEffect(() => {
    dispatch(fetchDrinks(category));
  }, [category, dispatch]);

  return (
    <Container>
      <Dropdown chosenCategory={chosenCategory} />
      {drinks.map((drink) => (
        <DrinkCard key={drink.idDrink} drink={drink} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 0 35px;
`