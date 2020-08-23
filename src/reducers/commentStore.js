import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name: 'User comments',
    comments: []
  }
}

export const commentStore = createSlice({
  name: 'commentStore',
  initialState,
  reducers: {
    addComment: (state, action) => {
      const comments = action.payload
      state.list.comments.push(comments)
    },
    removeComment: (state, action) => {
      const { itemIndex } = action.payload;
      state.list.comments = state.list.comments.filter(
        (item, index) => index !== itemIndex
      )
    }
  }
})