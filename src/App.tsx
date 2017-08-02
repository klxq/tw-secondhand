import * as React from 'react'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Component } from 'react'
import { ConnectedRouter } from 'react-router-redux'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'

import { basename } from './routing'
import { storeConfigure } from './store'
import { routers } from './store/routers'

const history = createHistory({
    basename,
})
const store = storeConfigure(history)

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>{routers}</ConnectedRouter>
            </Provider>
        )
    }
}
