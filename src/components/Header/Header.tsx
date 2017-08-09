import * as React from 'react'
import { Component } from 'react'

import './Header.css'

export interface HeaderProps {
    title: string
    back?: boolean
    onBack?: () => void
}

export class Header extends Component<HeaderProps> {
    back(): void {
        if (this.props.onBack) {
            this.props.onBack()
        } else {
            history.back()
        }
    }

    render() {
        return (
            <div className="App-header">
                <a className="back" hidden={!this.props.back} onClick={() => this.back()}>X</a>
                <div className="container">
                    <h2>{this.props.title}</h2>
                </div>
            </div>
        )
    }
}
