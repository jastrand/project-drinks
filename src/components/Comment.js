import React from 'react'
import { useDispatch } from 'react-redux'
import { commentStore } from '../reducers/commentStore'

export const Comment = ({ comment }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(commentStore.actions.removeItem(comment));
  }

  return (
    <div>
      <p>{comment.message}</p>
      <button type="button" onClick={handleClick}>Remove comment</button>
    </div>
  )
}