import * as React from 'react'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

import { basename } from './routing'
import { storeConfigure } from './store'
import { routers } from './store/routers'

const history = createHistory({
  basename,
})
const store = storeConfigure(history)

export const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>{routers}</ConnectedRouter>
    </Provider>
)
