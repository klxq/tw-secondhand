import { AppState } from '../../definitions'
import * as Redux from 'redux'

const initialState: AppState  = {
    loading: false,
    logined: false,
}

export const appReducer: Redux.Reducer<AppState> = (state: AppState, action: Redux.Action): AppState => {
    state = state || initialState
    return state
}
