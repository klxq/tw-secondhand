let basename: string = '/tw-secondhand/'

if (process.env.NODE_ENV === 'development') {
  basename = ''
}

export {
  basename
}
