import * as React from 'react'
import { Component } from 'react'
import { connect, DispatchProp } from 'react-redux'

import { RootState, UserState } from '../../../definitions'
import { Header, Footer, Logo, Button } from '../../../components'

import './ProfilePage.css'

export interface ProfilePageProps extends DispatchProp<void> {
    user: UserState
}

export class ProfilePage extends Component<ProfilePageProps> {
    constructor(props: ProfilePageProps) {
        super(props)
    }

    render() {
        return (
            <div className="App-profile">
                <Header title="个人信息"/>
                <div className="logo-container">
                    <Logo/>
                    <span>{this.props.user.username || '未登录'}</span>
                </div>
                <Button content="已买宝贝"/>
                <Button content="出售宝贝"/>
                <Button content="退出登录"/>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state: RootState): Partial<ProfilePageProps> {
  return {
      user: state.user,
  }
}

export const connectedProfilePage = connect(mapStateToProps)(ProfilePage)
