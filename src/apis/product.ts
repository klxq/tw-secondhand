import { Product } from '../definitions'
import { get, put } from './utils'

export async function available(): Promise<Product[]> {
    return get<Product[]>('/products')
}

export async function purchase(id: string, token: string): Promise<void> {
    return put<void>(`/products/buy/${id}`, { headers: { 'sessionToken': token } })
}
