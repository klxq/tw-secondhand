import * as React from 'react'
import { shallow } from 'enzyme'

import { ProductActionType } from '../../../modules/product/actions'
import { HomePage, HomePageProps } from './HomePage'

let props: HomePageProps

beforeEach(() => {
    props = {
        dispatch: () => null,
        match: null,
        location: null,
        history: null,
    } as object as HomePageProps
})

it('HomePage shallow renders', () => {
    const wrapper = shallow(<HomePage {...props}/>)

    expect(wrapper.find('.App').length).toBe(1)
})

it('HomePage dispatch fetch-available-products action', () => {
    const spy = spyOn(props, 'dispatch').and.stub()

    shallow(<HomePage {...props}/>)

    expect(spy.calls.mostRecent().args).toEqual([{
        type: ProductActionType.AVAILABLE_START
    }])
})
