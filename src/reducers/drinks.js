import { createSlice } from '@reduxjs/toolkit'

export const drinks = createSlice({
  name: 'drinks',
  initialState: {
    drinkData: []
  },
  reducers: {
    setDrinks: (state, action) => {
      state.drinkData = action.payload
    }
  }
})

export const fetchDrinks = () => {
  return (dispatch) => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Wine')
      .then((res) => res.json())
      .then((json) => {
        dispatch(drinks.actions.setDrinks(json))
        console.log(json)
      })
  }
}

