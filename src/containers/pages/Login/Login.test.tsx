import * as React from 'react'
import { shallow } from 'enzyme'

import { Login } from './Login'

it('Login shallow renders', () => {
    const wrapper = shallow(<Login/>)

    expect(wrapper.find('.App-login').length).toBe(1)
})
