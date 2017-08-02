import { AppState } from '../../definitions'
import * as Redux from 'redux'

const initialState: AppState  = {
    loading: false,
    logined: false,
}

export function appReducer(state: AppState, action: Redux.Action): AppState {
    state = state || initialState
    return state
}
