import * as React from 'react'
import { Component } from 'react'
import { connect, DispatchProp } from 'react-redux'

import { RootState } from '../../../definitions'
import { Modal, Header, Logo, Button } from '../../../components'
import { userLogin } from '../../../modules/user/actions'

import './Login.css'

export interface LoginProps extends DispatchProp<void> {

}

export interface LoginState {
    username: string
    password: string
}

export class Login extends Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }

    updateUsername(event: { target: EventTarget }): void {
        this.setState({
            username: (event.target as HTMLInputElement).value
        })
    }

    updatePassword(event: { target: EventTarget }): void {
        this.setState({
            password: (event.target as HTMLInputElement).value
        })
    }

    login(): void {
        this.props.dispatch(userLogin({
            username: this.state.username,
            password: this.state.password,
        }))
    }

    render() {
        return (
            <Modal>
                <div className="App-login">
                    <Header title="请登录" back={true}/>
                    <div className="logo-container">
                        <Logo/>
                    </div>
                    <form>
                        <div>
                            <input placeholder="用户名" onInput={(e) => this.updateUsername(e)}/>
                        </div>
                        <div>
                            <input placeholder="密码" onInput={(e) => this.updatePassword(e)}/>
                        </div>
                        <Button content="登录" onClick={() => this.login()}/>
                        <Button content="免费注册"/>
                    </form>
                </div>
            </Modal>
        )
    }
}

function mapStateToProps(state: RootState): Partial<LoginProps> {
  return { }
}

export const connectedLogin = connect(mapStateToProps)(Login)
