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
  }, [dispatch, drinks]);

  return (
    <Container>
      {drinks.map((drink, i) => (
        <DrinkCard key={i} drink={drink} />
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