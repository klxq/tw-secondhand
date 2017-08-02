import * as fetchMock from 'fetch-mock'

import { host } from '../utils'

fetchMock.mock(`${host}/login`, 200, {name: 'Tom'})
