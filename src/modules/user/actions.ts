import { Epic, ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { User, UserAuthenticatingAction, GeneralAction, UserWithToken } from '../../definitions'
import { login } from '../../apis/user'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGIN_SUC = 'USER_LOGIN_SUC'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'

export function userLogin(user: User): UserAuthenticatingAction {
    return { type: USER_LOGIN, payload: user }
}

function loginEpic(action$: ActionsObservable<GeneralAction>): Observable<GeneralAction> {
    return action$.ofType(USER_LOGIN)
        .mergeMap((action: UserAuthenticatingAction) => Observable.from(login(action.payload)))
        .map((loginResponse: null | UserWithToken) => (
            loginResponse
            ? {type: USER_LOGIN_SUC, payload: loginResponse}
            : {type: USER_LOGIN_FAIL}
        ))
}

export const epics: Epic<GeneralAction, void>[] = [
    loginEpic,
]
