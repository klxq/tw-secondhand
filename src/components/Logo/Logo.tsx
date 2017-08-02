import * as React from 'react'
import { Component } from 'react'
import './Logo.css'

const logo = require('./logo.png')

interface LogoProps {
   logo: string
}

export class Logo extends Component<LogoProps> {
    render() {
        return (
            <img src={this.props.logo || logo} className="App-logo" alt="logo" />
        )
    }
}
