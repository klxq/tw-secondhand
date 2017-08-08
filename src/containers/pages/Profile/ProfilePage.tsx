import * as React from 'react'
import { Component } from 'react'

import { Header, Footer } from '../../../components'

export class ProfilePage extends Component {
    render() {
        return (
            <div className="App-profile">
                <Header title="精选"/>
                <Footer/>
            </div>
        )
    }
}
