import * as fetchMock from 'fetch-mock'
import { host } from './utils'
import { available } from './product'

beforeEach(() => {
    fetchMock.reset()
})

it('should be able to retrieve available products', async () => {
    const mockProducts = [{
      name: 'iPhone 7',
      price: '5678',
      img: 'http://apple-iphone-image-url',
      description: 'Apple iPhone 7',
      owner: {
        username: 'trotyl',
        objectId: '6059170',
      }
    }]
    fetchMock.mock(`${host}/products`, JSON.stringify(mockProducts))
    const products = await available()

    expect(products.length).toBe(1)
    expect(products[0].name).toBe('iPhone 7')
})
