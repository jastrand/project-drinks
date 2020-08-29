import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInfo } from 'reducers/drinks'
import { CommentInput } from 'components/CommentInput'
import { Comment } from 'components/Comment'

export const Details = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const details = useSelector((state) => state.drinks.drinkDetails)
  // eslint-disable-next-line max-len
  const comments = useSelector((state) => state.commentStore.list.comments)
  const errorDetails = useSelector((state) => state.drinks.errorMessage)
  const itemNotFound = errorDetails === 'could not fetch drink'

  useEffect(() => {
    dispatch(fetchInfo(id));
  }, [id, dispatch]);

  return (
    <div>
      {details && <div><p>{details.strDrink} {details.strCategory}</p><Link to="/"> Back to start</Link></div>}
      {itemNotFound && <div><h2>Drink not found</h2></div>}
      <div>
        <h5>Comments from users</h5>
        {comments && comments.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
        <CommentInput drinkId={id} />
      </div>
    </div>
  )
}