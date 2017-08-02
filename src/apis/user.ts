import { User, CreatedUser } from '../definitions'
import { post } from './utils'

export async function login(user: User): Promise<CreatedUser> {
    return post<CreatedUser>('/login', user)
}
