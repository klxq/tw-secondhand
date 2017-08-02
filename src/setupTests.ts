declare namespace NodeJS {
  export interface Global {
    localStorage: Storage
  }
}

global.localStorage = {
  key: null,
  length: 0,
  getItem() { return null },
  setItem() { return null },
  removeItem() { return null },
  clear() { return null },
}
