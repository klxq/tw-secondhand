import { UserState, UserAction } from '../../definitions'
import * as Redux from 'redux'

const initialState: UserState = {
    name: '',
}

export const userReducer: Redux.Reducer<UserState> = (state: UserState, action: UserAction): UserState => {
    state = state || initialState
    switch (action.type) {
        case 'USER_LOGIN_SUC':
            return {
                name: action.payload.username || state.name,
            }
        default:
    }
    return state
}
