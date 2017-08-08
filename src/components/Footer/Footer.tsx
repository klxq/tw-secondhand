import * as React from 'react'
import { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

import './Footer.css'

const homeIcon = require('./home.png')
const plusIcon = require('./plus.png')
const personIcon = require('./person.png')

export class Footer extends Component {
    render() {
        return (
            <div className="App-footer">
                <ul className="">
                    <li>
                        <NavLink to="/home/" activeClassName="active">
                            <span className="footer-img">
                                <img src={homeIcon} alt="home"/>
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <Link to="./upload/">
                            <span className="footer-img">
                                <img src={plusIcon} alt="add"/>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <NavLink to="/profile/" activeClassName="active">
                            <span className="footer-img">
                                <img src={personIcon} alt="profile"/>
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
