import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js'
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
      {commentExist && (
        <CommentSection>
          <p>visitor: {userComments.comment}</p>
          <IconButton type="button" onClick={handleClick}>
            <Icon path={mdiDelete} size={1} />
          </IconButton>
        </CommentSection>)}

    </div>
  )
}

const IconButton = styled.button`
  background: none;
  border: none;
  outline; none;
  color: pink;

  &:hover {
    transform: scale(1.5);
    color: ${(props) => props.color || '#f08080'};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`

const CommentSection = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #FDF5E6;
  margin: 10px 0;
  border: 1px solid pink;
  width: 400px;
  padding: 10px;
`

