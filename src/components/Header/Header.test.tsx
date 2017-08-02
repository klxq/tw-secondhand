import * as React from 'react'
import { shallow } from 'enzyme'
import { Header } from './Header'

it('Logo shallow renders', () => {
  const wrapper = shallow(<Header title="test-title"/>)

  expect(wrapper.find('.App-header').length).toBe(1)
})

it('Logo display title', () => {
  const wrapper = shallow(<Header title="test-title"/>)

  expect(wrapper.find('h2').length).toBe(1)
  expect(wrapper.find('h2').text()).toBe('test-title')
})
