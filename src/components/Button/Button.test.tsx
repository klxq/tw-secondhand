import * as React from 'react'
import { shallow } from 'enzyme'
import { Button } from './Button'

it('Logo shallow renders', () => {
    const wrapper = shallow(<Button content="test"/>)

    expect(wrapper.find('.App-button').length).toBe(1)
})
