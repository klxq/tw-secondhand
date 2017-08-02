import { Action } from 'redux'
import { AppState } from '../../definitions'

const initialState: AppState  = {
    loading: false,
    logined: false,
}

export function appReducer(state: AppState = initialState, action: Action): AppState {
    switch (action.type) {
        default:
            return state
    }
}
