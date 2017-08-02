import { combineEpics } from 'redux-observable'

import { epics as userEpics } from '../modules/user/actions'
import { productEpics } from '../modules/product/actions'

export const rootEpic = combineEpics(
    ...userEpics,
    ...productEpics,
)
