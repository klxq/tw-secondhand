import * as React from 'react'
import { Component } from 'react'

import './Button.css'

export interface ButtonProps {
    content: string
    onClick?: () => void
}

export class Button extends Component<ButtonProps> {
    render() {
        return (
            <div className="App-button">
                <button onClick={this.props.onClick}>
                    {this.props.content}
                </button>
            </div>
        )
    }
}
