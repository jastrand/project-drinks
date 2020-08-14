import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDrinks } from 'reducers/drinks'

export const DrinkList = () => {
  const dispatch = useDispatch()
  const drinks = useSelector((state) => state.drinkData)

  // useEffect(() => {
  //   if (!drinks) {
  //     dispatch(fetchDrinks())
  //   }
  // })
  useEffect(() => {
    dispatch(fetchDrinks())
  }, [dispatch, drinks])

  return (
    <div>
      {drinks.map((drink, i) => (
        <p key={i}>{drink.strDrink}</p>
      ))}
    </div>
  )
}