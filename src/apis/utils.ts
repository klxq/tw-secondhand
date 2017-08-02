export const host = 'https://secondhand.leanapp.cn'

export const fetchJson = (url: string, option?: RequestInit) => fetch(url, option)
  .then(response => {
    if (response.status < 400) {
      return response.json()
    }
    throw response
  })
