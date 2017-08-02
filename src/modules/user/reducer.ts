import { UserState, UserAuthenticatedAction } from '../../definitions'

const initialState: UserState = {
    username: null,
    sessionToken: null,
}

export function userReducer(state: UserState, action: UserAuthenticatedAction): UserState {
    state = state || initialState
    switch (action.type) {
        case 'USER_LOGIN_SUC':
            return {
                ...state,
                ...action.payload,
            }
        default:
    }
    return state
}
