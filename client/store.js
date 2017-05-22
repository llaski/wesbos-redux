import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import rootReducer from './reducers'
import comments from './data/comments'
import posts from './data/posts'

const defaultState = {
    posts,
    comments
}

export const history = createHistory()

const middleware = routerMiddleware(history)

const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(middleware)
)

export default store
