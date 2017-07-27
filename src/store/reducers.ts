import { routerReducer as router } from 'react-router-redux'

import { appReducer as app } from '../modules/app/reducer'
import { userReducer as user } from '../modules/user/reducer'

export const reducers = {
    app,
    user,
    router,
}
