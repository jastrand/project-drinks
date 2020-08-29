import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { comments } from '../reducers/comments'

export const Comment = ({ comment, id }) => {
  const dispatch = useDispatch()
  const userComments = useSelector((state) => state.comments.comments[comment])
  const commentExist = userComments.drink === id

  const handleClick = () => {
    console.log('removing')
    dispatch(comments.actions.removeComment({ comment }))
  }

  return (
    <div>
      {commentExist && <div><p>{userComments.comment}</p><button type="button" onClick={handleClick}>Remove comment</button></div>}

    </div>
  )
}

