import { createSlice } from '@reduxjs/toolkit'

export const userComments = createSlice({
  name: 'comments',
  initialState: {
    comments: []
  },
  reducers: {
    addComment: (state, action) => {
      const { comments } = state.comments
      comments.push(action.payload)
      state.comments = comments
    },
    removeComment: (state, action) => {
      const { comments } = state.comments
      const comment = action.payload
      const newList = comments.filter((item) => item.message !== comment.message);
      state.comments = newList
    }
  }
})