import { combineEpics } from 'redux-observable'

import { epics as userEpic } from '../modules/user/actions'

export const rootEpic = combineEpics(
    ...userEpic,
)
