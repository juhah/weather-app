import React from 'react'
import ReactDOM from 'react-dom'

import createStore from './store/createStore'
import createRoutes from './routes'
import AppContainer from './containers/AppContainer'

const initialState = {}
const store = createStore(initialState)

const routes = createRoutes(store)

ReactDOM.render(
  <AppContainer store={store} routes={routes} />,
  document.getElementById('root')
)
