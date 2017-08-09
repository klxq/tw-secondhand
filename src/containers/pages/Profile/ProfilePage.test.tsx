import * as React from 'react'
import { shallow } from 'enzyme'

import { ProfilePage } from './ProfilePage'

it('ProfilePage shallow renders', () => {
    const wrapper = shallow(<ProfilePage/>)

    expect(wrapper.find('.App-profile').length).toBe(1)
})
