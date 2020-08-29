import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDrinks } from 'reducers/drinks'
import { DrinkCard } from 'components/DrinkCard'
import styled from 'styled-components'

export const DrinkList = () => {
  const dispatch = useDispatch()
  const drinks = useSelector((state) => state.drinks.drinkData)

  useEffect(() => {
    dispatch(fetchDrinks());
  }, [dispatch]);

  return (
    <Container>
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