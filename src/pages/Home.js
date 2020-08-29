import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { combineReducers, createStore, applyMiddleware, compose } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { Details } from 'pages/Details'
import { DrinkList } from 'components/DrinkList'
import { drinks } from 'reducers/drinks'
import { comments } from 'reducers/comments';
import { Header } from 'components/Header';

const reducer = combineReducers({
  drinks: drinks.reducer,
  comments: comments.reducer
})

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('drinks-reduxState', serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('drinks-reduxState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState, composeEnhancer(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()));

export const Home = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Header />
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