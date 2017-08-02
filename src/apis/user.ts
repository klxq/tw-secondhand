import { UserForLogin, User } from '../definitions'
import { request } from './utils'

export const login = (user: UserForLogin): Promise<User> => request('/login', { body: JSON.stringify(user) })
