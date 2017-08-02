export const host = 'https://secondhand.leanapp.cn'

export function normalizeUrl(url: string): string {
    if (url.startsWith('http') || url.startsWith('//')) {
        return url
    } else if (url.startsWith('/')) {
        return `${host}${url}`
    } else {
        return `${host}/${url}`
    }
}

export function serializeQuery(query: object): string {
    const params = new URLSearchParams()
    Object.entries(query).forEach(([key, value]) => params.append(key, value))
    return params.toString()
}

export async function request<T>(url: string, option?: RequestInit): Promise<T> {
    const normalizedUrl = normalizeUrl(url)
    const response = await fetch(normalizedUrl, option)
    const body = await response.json()
    return body
}

export async function get<T>(url: string, query?: object): Promise<T> {
    let normalizedUrl = url
    if (query) {
        const queryString = serializeQuery(query)
        normalizedUrl = `${url}?${queryString}`
    }
    return request<T>(normalizedUrl, { method: 'GET' })
}

export async function post<T>(url: string, body: object | string, query?: object): Promise<T> {
    let normalizedUrl = url
    let normalizedBody = body
    if (query) {
        const queryString = serializeQuery(query)
        normalizedUrl = `${url}?${queryString}`
    }
    if (typeof body === 'object') {
        normalizedBody = JSON.stringify(body)
    }
    return request<T>(normalizedUrl, { method: 'POST', body: normalizedBody })
}

export async function put<T>(url: string, body: object | string, query?: object): Promise<T> {
    let normalizedUrl = url
    let normalizedBody = body
    if (query) {
        const queryString = serializeQuery(query)
        normalizedUrl = `${url}?${queryString}`
    }
    if (typeof body === 'object') {
        normalizedBody = JSON.stringify(body)
    }
    return request<T>(normalizedUrl, { method: 'PUT', body: normalizedBody })
}
