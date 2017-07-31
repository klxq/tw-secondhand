import * as React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { push } from 'react-router-redux'

import { RootState, UserState } from '../../../definitions'
import { Logo } from '../../../components'
import { userLogin } from '../../../modules/user/actions'

import './HomePage.css'
type HomePageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
    user: UserState,
}

const HomePage = (props: HomePageProps<object>) => {
    const { dispatch, user } = props
    return (
        <div className="App">
            <div className="App-header">
                <Logo />
                <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>{user.name ? `User Name: ${user.name}` : 'No User Name.'}</p>

            <button onClick={() => dispatch(userLogin({username: 'admin', password: 'admin'}))}>
                Login and get User Name
            </button>
            <p>
                <button onClick={() => dispatch(push('about-us'))}>Go to About Us</button>
            </p>
        </div>
    )
}

const connectedHomePage = connect(
    (state: RootState<object>) => ({user: state.user})
)(HomePage)

export {
    connectedHomePage as HomePage
}
