import * as React from 'react'
import { Component } from 'react'
import { connect, DispatchProp } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import { RootState, UserState } from '../../../definitions'
import { Login } from '../../pages'

export interface ActionWrapperProps extends DispatchProp<void>, RouteComponentProps<void> {
    user: UserState | null
}

export class ActionWrapper extends Component<ActionWrapperProps> {
    render() {
        if (this.props.user) { return null }

        const params = new URLSearchParams(this.props.location.search)

        switch (params.get('action')) {
            case 'login':
                return (<Login/>)
            default:
                return null
        }
    }
}

function mapStateToProps(state: RootState): Partial<ActionWrapperProps> {
  return {
      user: state.user
  }
}

export const connectedHomePage = connect(mapStateToProps)(ActionWrapper)
