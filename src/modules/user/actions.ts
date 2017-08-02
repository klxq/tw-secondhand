import { fromPromise, Stream } from 'most'
import { select, Epic } from 'redux-most'

import { User, UserAuthenticatingAction, GeneralAction, CreatedUser } from '../../definitions'
import { login } from '../../apis/user'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGIN_SUC = 'USER_LOGIN_SUC'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'

export function userLogin(user: User): UserAuthenticatingAction {
    return { type: USER_LOGIN, payload: user }
}

function loginEpic(action$: Stream<UserAuthenticatingAction>): Stream<GeneralAction> {
    return action$.thru(select(USER_LOGIN))
        .chain((action: UserAuthenticatingAction) => fromPromise(login(action.payload)))
        .map((loginResponse: null | CreatedUser) => (
            loginResponse
            ? {type: USER_LOGIN_SUC, payload: loginResponse}
            : {type: USER_LOGIN_FAIL}
        ))
}

export const epics: Array<Epic<GeneralAction>> = [
    loginEpic,
]
