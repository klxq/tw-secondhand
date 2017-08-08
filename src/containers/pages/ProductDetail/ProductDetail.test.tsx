import * as React from 'react'
import { shallow } from 'enzyme'

import { Product } from '../../../definitions'
import { ProductDetail, ProductDetailProps } from './ProductDetail'

let props: ProductDetailProps
let products: Product[]

beforeEach(() => {
    props = {
        dispatch: () => null,
        match: {
            params: { id: 'aWQlMkZ0ZXN0' }
        },
        location: null,
        history: null,
    } as object as ProductDetailProps

    products = [{
        name: 'test',
        price: '123',
        img: '',
        description: '',
        owner: {
            objectId: 'id',
            username: '',
        }
    }]
})

it('HomePage shallow renders', () => {
    const wrapper = shallow(<ProductDetail products={products} {...props}/>)

    expect(wrapper.find('.App-product-detail').length).toBe(1)
})
