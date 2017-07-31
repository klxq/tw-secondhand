import { UserForLogin, User } from '../definitions'
import { fetchJson } from './utils'

export const login = (user: UserForLogin): Promise<User> => fetchJson('/login', { body: JSON.stringify(user) })
