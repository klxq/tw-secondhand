import * as React from 'react'
import { Component } from 'react'

import './Header.css'

export interface HeaderProps {
  title: string
}

export class Header extends Component<HeaderProps> {
  private title: string

  constructor({ title }: HeaderProps) {
    super()

    this.title = title
  }

  render() {
    return (
      <div className="App-header">
          <h2>{this.title}</h2>
      </div>
    )
  }
}
