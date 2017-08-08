import { User, UserWithToken } from '../definitions'
import { post } from './utils'

export async function login(user: User): Promise<UserWithToken> {
    return post<UserWithToken>('/login', user)
}
