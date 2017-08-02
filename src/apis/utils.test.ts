import * as fetchMock from 'fetch-mock'
import { normalizeUrl, host, request } from './utils'

it('should normalize absolute url', () => {
  expect(normalizeUrl('http://abc.def')).toBe('http://abc.def')
})

it('should normalize relative url with //', () => {
  expect(normalizeUrl('//abc.def')).toBe('//abc.def')
})

it('should normalize relative url with absolute path', () => {
  expect(normalizeUrl('/foo')).toBe(`${host}/foo`)
})

it('should normalize relative url with relative path', () => {
  expect(normalizeUrl('foo')).toBe(`${host}/foo`)
})

it('should fetch json file', async () => {
  fetchMock.mock(`${host}/foo`, 'true')

  const res = await request('/foo')

  expect(res).toBe(true)
})
