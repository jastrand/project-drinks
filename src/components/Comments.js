import React from 'react'
import { CommentInput } from 'components/CommentInput'
import { CommentList } from 'components/CommentList'

export const Comments = () => {
  return (
    <div>
      <CommentInput />
      <CommentList />
    </div>
  )
}