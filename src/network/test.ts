import request from './request'

export const testApi = (name: string) => {
  return request({
    url: '/api/test',
    method: 'POST',
    data: {
      name
    }
  })
}
