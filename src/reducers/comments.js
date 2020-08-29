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
    }
  }
})
