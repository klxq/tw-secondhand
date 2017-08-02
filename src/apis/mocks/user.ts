import * as fetchMock from 'fetch-mock'

import { host } from '../utils'

fetchMock.post(`${host}/login`, {
    'sessionToken': 'bthj6jk5c97uevo0vox9qp4u9',
    'username': 'testuser',
})
