import * as React from 'react'
import { shallow } from 'enzyme'

import { ActionWrapper, ActionWrapperProps } from './ActionWrapper'

let props: ActionWrapperProps

beforeEach(() => {
    props = {
        dispatch: () => null,
        match: null,
        location: {
            search: '',
        },
        history: null,
    } as object as ActionWrapperProps
})

it('Login shallow renders', () => {
    shallow(<ActionWrapper {...props}/>)
})
