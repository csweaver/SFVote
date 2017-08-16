/**
 * Created by Charlotte on 4/14/2017.
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import futureVoteApp from './reducers'
import FutureVote from './app'

const loggerMiddleware = createLogger()
const store = createStore(webDisplayApp, {}, applyMiddleware(thunkMiddleware))
//let store = window.my_store = createStore(webDisplayApp, {}, window.devToolsExtension ? window.devToolsExtension() : undefined);

render(
    <Provider store={store}>
        <FutureVote  />
    </Provider>,
    document.getElementById('content')
);