import * as fetchMock from 'fetch-mock'
import { normalizeUrl, serializeQuery, host, request, get, post, put } from './utils'

beforeEach(() => {
    fetchMock.reset()
})

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

it('should serialize query', () => {
    expect(serializeQuery({ 'foo': 'bar' })).toBe('foo=bar')
})

it('should send general request', async () => {
    fetchMock.get(`${host}/foo`, 'true')

    const res = await request('/foo')

    expect(res).toBe(true)
})

it('should send get request without query', async () => {
    fetchMock.get(`${host}/foo`, 'true')

    const res = await get('/foo')

    expect(res).toBe(true)
})

it('should send get request with query', async () => {
    fetchMock.get(`${host}/foo?foo=bar`, 'true')

    const res = await get('/foo', { query: { 'foo': 'bar' } })

    expect(res).toBe(true)
})

it('should send post request with string body', async () => {
    fetchMock.post(`${host}/foo`, 'true')

    const res = await post('/foo', { body: 'foo' })

    expect(res).toBe(true)
    expect((fetchMock.lastOptions() as { body: string }).body).toBe('foo')
})

it('should send post request with hash body', async () => {
    fetchMock.post(`${host}/foo`, 'true')

    const res = await post('/foo', { body: { 'foo': 'bar' } })

    expect(res).toBe(true)
    expect((fetchMock.lastOptions() as { body: string }).body).toBe('{"foo":"bar"}')
})

it('should send put request with string body', async () => {
    fetchMock.put(`${host}/foo`, 'true')

    const res = await put('/foo', { body: 'foo' })

    expect(res).toBe(true)
    expect((fetchMock.lastOptions() as { body: string }).body).toBe('foo')
})

it('should send put request with hash body', async () => {
    fetchMock.put(`${host}/foo`, 'true')

    const res = await put('/foo', { body: {'foo': 'bar' } })

    expect(res).toBe(true)
    expect((fetchMock.lastOptions() as { body: string }).body).toBe('{"foo":"bar"}')
})
