import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDrinks } from 'reducers/drinks'

export const DrinkList = () => {
  const dispatch = useDispatch()
  const drinks = useSelector((state) => state.drinks.drinkData)

  useEffect(() => {
    if (drinks.length) {
      return;
    }
    dispatch(fetchDrinks());
  }, [dispatch, drinks]);

  return (
    <div>
      {drinks.map((drink, i) => (
        <Link key={i} to={`/drinks/${drink.idDrink}`}>
          <p>{drink.strDrink}</p>
        </Link>
      ))}
    </div>
  )
}