import * as React from 'react'
import { Component } from 'react'

import { Modal, Header, Logo, Button } from '../../../components'
import { login } from '../../../apis/user'
import './Login.css'

interface LoginProps {

}

interface LoginState {
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

    async login(): Promise<void> {
        await login({
            username: this.state.username,
            password: this.state.password,
        })

        history.back()
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
