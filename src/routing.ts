let basename: string = '/tw-secondhand/'

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  basename = ''
}

export {
  basename
}
