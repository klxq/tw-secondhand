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

export async function request<T>(url: string, option?: RequestInit): Promise<T> {
  const normalizedUrl = normalizeUrl(url)
  const response = await fetch(normalizedUrl, option)
  const body = await response.json()
  return body
}
