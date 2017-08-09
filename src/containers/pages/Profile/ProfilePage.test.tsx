import * as React from 'react'
import { shallow } from 'enzyme'

import {  } from '../../../definitions'
import { ProfilePage, ProfilePageProps } from './ProfilePage'

let props: ProfilePageProps

beforeEach(() => {
    props = {
        dispatch: () => null,
        match: null,
        location: null,
        history: null,
        user: {
            username: null,
            sessionToken: null,
        },
    } as object as ProfilePageProps
})

it('ProfilePage shallow renders', () => {
    const wrapper = shallow(<ProfilePage {...props}/>)

    expect(wrapper.find('.App-profile').length).toBe(1)
})
