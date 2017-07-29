import * as React from 'react'
import { shallow } from 'enzyme'
import { Footer } from './Footer'

it('Footer shallow renders', () => {
    const wrapper = shallow(<Footer/>)

    expect(wrapper.find('.App-footer').length).toBe(1)
})

it('Footer shallow active stats', () => {
    const wrapper = shallow(<Footer/>)

    expect(wrapper.find('.active').length).toBe(1)
})
