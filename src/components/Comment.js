import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { comments } from '../reducers/comments'

export const Comment = ({ comment, id }) => {
  const dispatch = useDispatch()
  const comm = useSelector((state) => state.comments.comments[comment])
  const commentExist = comm.drink === id
  console.log(id)

  // const handleClick = () => {
  //   console.log('removing')
  // }

  return (
    <div>
      <p>{comm.comment}</p>
    </div>
  )
}

// button type="button" onClick={handleClick}>Remove comment</>