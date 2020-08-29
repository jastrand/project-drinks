import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name: 'User comments',
    comments: []
  }
}

export const commentStore = createSlice({
  name: 'Comments',
  // eslint-disable-next-line object-shorthand
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const { comment } = action.payload
      state.list.comments.push(comment)
    }
  }
})