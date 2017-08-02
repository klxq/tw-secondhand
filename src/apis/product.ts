import { Product } from '../definitions'
import { request } from './utils'

export async function available(): Promise<Product[]> {
  return request<Product[]>('/products')
}
