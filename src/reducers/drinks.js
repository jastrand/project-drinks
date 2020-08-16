import { createSlice } from '@reduxjs/toolkit'

export const drinks = createSlice({
  name: 'drinks',
  initialState: {
    drinkData: [],
    drinkInfo: []
  },
  reducers: {
    setDrinks: (state, action) => {
      state.drinkData = action.payload
    },
    setInfo: (state, action) => {
      const { id, drinkInfo } = action.payload;
      state.drinkInfo[id] = drinkInfo
    }
  }
})

export const fetchDrinks = () => {
  return (dispatch) => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Wine')
      .then((res) => res.json())
      .then((json) => {
        dispatch(drinks.actions.setDrinks(json.drinks))
      })
  }
}
export const fetchInfo = (id) => {
  const DETAILS_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  console.log(`fetching ${DETAILS_URL}`)
  return (dispatch) => {
    fetch(DETAILS_URL)
      .then((res) => res.json())
      .then((json) => {
        dispatch(drinks.actions.setInfo({ id, drinkInfo: json.drinks }))
      });
  };
};