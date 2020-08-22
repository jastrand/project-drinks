import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInfo } from 'reducers/drinks'

export const Details = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const details = useSelector((state) => state.drinks.drinkDetails)
  const errorDetails = useSelector((state) => state.drinks.errorMessage)

  const itemNotFound = errorDetails === 'could not fetch drink'

  useEffect(() => {
    dispatch(fetchInfo(id));
  }, [id, dispatch]);

  return (
    <div>
      {details && <p>{details.strDrink} {details.strCategory}</p>}
      {/* below is not working correct */}
      {itemNotFound && <div><h2>Drink not found</h2> <Link to="/"> Back to start</Link></div>}
    </div>
  )
}