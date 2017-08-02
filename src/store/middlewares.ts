import thunk from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable'

import { rootEpic } from './epics'

const mostMiddleware = createEpicMiddleware(rootEpic)

const middlewares = [thunk, mostMiddleware]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(require('redux-logger').default)
}

export {
    middlewares
}
