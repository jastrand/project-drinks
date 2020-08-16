import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { combineReducers, createStore, applyMiddleware, compose } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { Details } from 'pages/Details'
import { DrinkList } from 'components/DrinkList'
import { drinks } from 'reducers/drinks'

const reducer = combineReducers({
  drinks: drinks.reducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export const Home = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <DrinkList />
          </Route>
          <Route path="/drinks/:id" exact>
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>

  )
}