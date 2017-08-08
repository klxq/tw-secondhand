import * as React from 'react'
import { Component } from 'react'

import './Header.css'

export interface HeaderProps {
    title: string
    back?: boolean
}

export class Header extends Component<HeaderProps> {
    render() {
        return (
            <div className="App-header">
                <a className="back" hidden={!this.props.back} onClick={() => history.back()}>X</a>
                <div className="container">
                    <h2>{this.props.title}</h2>
                </div>
            </div>
        )
    }
}
