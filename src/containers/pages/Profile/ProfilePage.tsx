import * as React from 'react'
import { Component } from 'react'
import { connect, DispatchProp } from 'react-redux'

import { RootState, UserState } from '../../../definitions'
import { Header, Footer } from '../../../components'

export interface ProfilePageProps extends DispatchProp<void> {
    user: UserState
}

export class ProfilePage extends Component<ProfilePageProps> {
    constructor(props: ProfilePageProps) {
        super(props)
    }

    render() {
        const params = new URLSearchParams(location.search)
        if (!this.props.user.sessionToken && !params.has('action')) {
            location.search = '?action=login'
        }

        return (
            <div className="App-profile">
                <Header title="个人信息"/>
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
