import { Product } from '../definitions'
// import { tokenize } from '../utils'
import { get } from './utils'

export async function available(): Promise<Product[]> {
    return get<Product[]>('/products')
}
