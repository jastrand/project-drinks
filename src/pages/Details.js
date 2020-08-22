import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInfo } from 'reducers/drinks'

export const Details = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const details = useSelector((state) => state.drinks.drinkDetails[id])

  useEffect(() => {
    if (details) {
      return;
    }
    dispatch(fetchInfo(id));
  }, [id, details, dispatch]);

  return (
    <div>
      {details && <p>{details.strDrink}</p>}

    </div>
  )
}