import { combineEpics } from 'redux-most'

import { epics as userEpic } from '../modules/user/actions'

export const rootEpic = combineEpics([
    ...userEpic,
])
