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
  }, [dispatch, details, id]);

  return (
    <div>
      <p>hello</p>

    </div>
  )
}