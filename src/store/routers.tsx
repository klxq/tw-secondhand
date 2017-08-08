import * as React from 'react'
import { Route, Redirect } from 'react-router'

import { connectedHomePage as HomePage } from '../containers/pages/Home/HomePage'
import { ProfilePage } from '../containers/pages/Profile/ProfilePage'
import { connectedProductDetail as ProductDetail } from '../containers/pages/ProductDetail/ProductDetail'
import { ActionWrapper } from '../containers/wrappers/Action/ActionWrapper'

export const routers = (
    <div>
        <main>
            <Route path="/home/" component={HomePage}/>
            <Route path="/profile/" component={ProfilePage}/>
            <Route path="/" exact={true} render={() => (<Redirect to="/home/" />)}/>
        </main>
        <aside>
            <Route path="/:page/products/:id/" component={ProductDetail}/>
            <Route component={ActionWrapper}/>
        </aside>
    </div>
)
