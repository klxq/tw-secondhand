import * as React from 'react'
import { shallow } from 'enzyme'
import { Product } from '../../definitions'
import { ProductList } from './ProductList'

it('Logo shallow renders', () => {
    const wrapper = shallow(<ProductList items={[]}/>)

    expect(wrapper.find('.App-product-list').length).toBe(1)
})

it('Logo display item information', () => {
    const products: Product[] = [{
        name: 'name',
        price: '12345',
        img: 'http://test.test',
        description: 'description',
        owner: {
            username: 'owner.username',
            objectId: 'owner.objectId',
        },
        objectId: '',
        createdAt: '',
        updatedAt: '',
    }]
    const wrapper = shallow(<ProductList items={products}/>)

    expect(wrapper.find('.App-product-list > ul > li').length).toBe(1)
})
