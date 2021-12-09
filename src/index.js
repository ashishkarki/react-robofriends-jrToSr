import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import 'tachyons'
import { searchTermReducer, requestRobotsReducer } from './reducers'

const logger = createLogger()

const rootReducer = combineReducers({
  searchTermReducer,
  requestRobotsReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
// registerServiceWorker();
