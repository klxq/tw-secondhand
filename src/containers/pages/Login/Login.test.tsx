import * as React from 'react'
import { shallow } from 'enzyme'

import { Login, LoginProps } from './Login'

let props: LoginProps

beforeEach(() => {
    props = {
        dispatch: () => null,
        match: null,
        location: null,
        history: null,
    } as object as LoginProps
})

it('Login shallow renders', () => {
    const wrapper = shallow(<Login {...props}/>)

    expect(wrapper.find('.App-login').length).toBe(1)
})
