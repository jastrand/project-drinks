import { createSlice } from '@reduxjs/toolkit'

export const comments = createSlice({
  name: 'comments',
  initialState: {
    comments: []
  },
  reducers: {
    addComment: (state, action) => {
      const userComment = action.payload
      state.comments.push(userComment)
    },
    removeComment: (state, action) => {
      const { comment } = action.payload;
      state.comments = state.comments.filter(
        (item, index) => index !== comment
      );
    }
  }
})
