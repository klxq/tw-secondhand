export const host = 'https://secondhand.leanapp.cn'

export interface HttpNoBodyOption {
    query?: object
    headers?: object
}

export interface HttpBodyOption extends HttpNoBodyOption {
    body?: object | string
}

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

export async function get<T>(url: string, option?: HttpNoBodyOption): Promise<T> {
    let normalizedUrl = url
    if (option && option.query) {
        const queryString = serializeQuery(option.query)
        normalizedUrl = `${url}?${queryString}`
    }
    return request<T>(normalizedUrl, { method: 'GET', headers: option && option.headers })
}

export async function post<T>(url: string, option?: HttpBodyOption): Promise<T> {
    let normalizedUrl = url
    let normalizedBody = option && option.body
    if (option && option.query) {
        const queryString = serializeQuery(option.query)
        normalizedUrl = `${url}?${queryString}`
    }
    if (typeof normalizedBody === 'object') {
        normalizedBody = JSON.stringify(normalizedBody)
    }
    return request<T>(normalizedUrl, { method: 'POST', body: normalizedBody, headers: option && option.headers })
}

export async function put<T>(url: string, option?: HttpBodyOption): Promise<T> {
    let normalizedUrl = url
    let normalizedBody = option && option.body
    if (option && option.query) {
        const queryString = serializeQuery(option.query)
        normalizedUrl = `${url}?${queryString}`
    }
    if (typeof normalizedBody === 'object') {
        normalizedBody = JSON.stringify(normalizedBody)
    }
    return request<T>(normalizedUrl, { method: 'PUT', body: normalizedBody, headers: option && option.headers })
}
