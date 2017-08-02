import * as React from 'react'
import { Component } from 'react'
import './Footer.css'

const homeIcon = require('./home.png')
const plusIcon = require('./plus.png')
const personIcon = require('./person.png')

export class Footer extends Component {
    render() {
        return (
            <div className="App-footer">
                <ul className="">
                    <li className="active">
                        <span className="footer-img">
                            <img src={homeIcon} alt="home"/>
                        </span>
                    </li>
                    <li>
                        <span className="footer-img">
                            <img src={plusIcon} alt="add"/>
                        </span>
                    </li>
                    <li>
                        <span className="footer-img">
                            <img src={personIcon} alt="profile"/>
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
}
