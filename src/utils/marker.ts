import { Product } from '../definitions'

export function tokenize(product: Product): string {
    return btoa(encodeURIComponent(`${product.owner.objectId}/${product.name}`))
}
