import { createSlice } from '@reduxjs/toolkit'

export const drinks = createSlice({
  name: 'drinks',
  initialState: {
    drinkData: [],
    drinkDetails: {},
    errorMessage: ''
  },
  reducers: {
    setDrinks: (state, action) => {
      state.drinkData = action.payload
    },
    setInfo: (state, action) => {
      state.drinkDetails = action.payload
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    }
  }
})

export const fetchDrinks = () => {
  const DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
  return (dispatch) => {
    fetch(DRINK_URL)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(`code is ${res.status}`);
        }
      })
      .then((json) => {
        dispatch(drinks.actions.setDrinks(json.drinks));
      })
      .catch((err) => {
        console.log('error', err);
        dispatch(drinks.actions.setErrorMessage('could not fetch drinks'));
      });
  };
};

// This thunk fetches the details page with useParams
export const fetchInfo = (id) => {
  const DETAILS_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  console.log(`fetching ${DETAILS_URL}`)
  return (dispatch) => {
    fetch(DETAILS_URL)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(`code is ${res.status}`);
        }
      })
      .then((json) => {
        if (json.drinks) {
          dispatch(drinks.actions.setInfo(json.drinks[0]))
          dispatch(drinks.actions.setErrorMessage(''))
        } else {
          throw new Error('404 not found')
        }
      })
      .catch((err) => {
        console.log('error', err);
        dispatch(drinks.actions.setErrorMessage('could not fetch drink'));
      });
  };
};
