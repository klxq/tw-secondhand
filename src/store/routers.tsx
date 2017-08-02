import * as React from 'react'
import { Route } from 'react-router'

import { connectedHomePage as HomePage } from '../containers/pages/Home/HomePage'
import { AboutUsPage } from '../containers/pages/AboutUs/AboutUsPage'

export const routers = (
    <div>
        <Route exact={true} path="/" component={HomePage}/>
        <Route path="/about-us" component={AboutUsPage}/>
    </div>
)
