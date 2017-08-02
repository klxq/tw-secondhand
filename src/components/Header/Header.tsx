import * as React from 'react'
import { Component } from 'react'

import './Header.css'

export interface HeaderProps {
    title: string
}

export class Header extends Component<HeaderProps> {
    props: HeaderProps

    constructor(props: HeaderProps) {
        super()

        this.props = props
    }

    render() {
        return (
        <div className="App-header">
            <h2>{this.props.title}</h2>
        </div>
        )
    }
}
