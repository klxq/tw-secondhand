import { Product } from '../definitions'
import { get } from './utils'

export async function available(): Promise<Product[]> {
    return get<Product[]>('/products')
}
