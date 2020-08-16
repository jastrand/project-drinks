import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInfo } from 'reducers/drinks'

export const Details = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const drinkDetails = useSelector((state) => state.drinks.drinkInfo[id])

  useEffect(() => {
    dispatch(fetchInfo(id))
  }, [dispatch, drinkDetails, id])

  return (
    <div>
      <p>{drinkDetails.strDrink}</p>
    </div>
  )
}