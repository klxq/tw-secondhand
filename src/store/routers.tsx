import * as React from 'react'
import { Route, Redirect } from 'react-router'

import { connectedHomePage as HomePage } from '../containers/pages/Home/HomePage'
import { connectedProductDetail as ProductDetail } from '../containers/pages/ProductDetail/ProductDetail'

export const routers = (
    <div>
        <main>
            <Route path="/home/" component={HomePage}/>
            <Route path="/" exact={true} render={() => (<Redirect to="/home/" />)}/>
        </main>
        <aside>
            <Route path="/:page/products/:id/" component={ProductDetail}/>
        </aside>
    </div>
)
