import { request, RequestTask } from '@tarojs/taro'
import { Response } from '@/types/common'
import { debounce, encrypt } from '@/utils/index'
import Notify from '@/components/vant-weapp/notify/notify'

export const getCommonParams = () => {
  return {
    timestamp: Date.now(),
    version: 'v1.0.0',
  }
}

export const baseURL: string = process.env.APP_REQUEST_BASE_API

class HttpRequest {
  public queue: Array<{ config: request.Option<any> }> // 请求的url集合
  public constructor() {
    this.queue = []
  }

  destroy<U>(config: request.Option<U> | string) {
    const token = ''

    const url = typeof config === 'string' ? config : config.url
    this.queue = this.queue.filter(v => v.config.url !== url)

    if (!this.queue.length) {
      setTimeout(() => {
        // hide loading
      }, 1000)
    }
    return token
  }

  requestInterceptors<U>(config: request.Option<U>) {
    // 请求拦截
    // 添加全局的loading...
    if (!Object.keys(this.queue).length) {
      // show loading
      // Message.loading()
    }
    return config
  }

  responseInterceptors<T, U>(config: request.Option<U>, response: RequestTask<Response<T>>) {
    // 响应拦截
    if (config.url) {
      this.destroy(config)
    }
    return this.resolveResponse(response)
  }

  async request<T = any, U = any>(options: request.Option<U>) {
    await this.requestInterceptors(options)
    return this.responseInterceptors<T, U>(options, request<Response<T>, U>(options))
  }

  async resolveResponse<T>(instance: RequestTask<Response<T>>) {
    try {
      const response = await instance;
      if (response && (response.data && response.data.code) === 1) {
        // 请求成功
        return response.data;
      }
      return Promise.reject(requestFail<T>(response).data); // 失败回调
    } catch (error) {
      deError(error.errMsg)
    }
  }
}

// 请求失败
function requestFail<T>(res: request.SuccessCallbackResult<Response<T>>) {
  const errStr = '网络繁忙！'
  // token失效重新登陆
  deError(res.data.msg || errStr)
  if (res.data.code === 1000001 || res.data.code === 401) {
    // tologin
    return res
  } else if (res.data.code === 17 || res.data.code === 10) {
    return res
  } else if (res && res.data.code) {
    return res
  }
  console.error({
    code: res.data.code,
    msg: res.data.msg || errStr
  })
  return res
}

const deError = debounce((msg: string) => {
  Notify({ type: 'danger', message: msg });
})

// 合并axios参数
const conbineOptions = (
  _opts: RequestOptions
): request.Option => {
  const opts = _opts
  const sendFile = opts.header && opts.header.dataType === 'file'
  const isForm = opts.isForm
  const options: request.Option = {
    method: opts.method || 'GET',
    url: (opts.baseURL ?? baseURL ?? '') + opts.url,
    header: {
      'Content-Type': isForm ? 'application/x-www-form-urlencoded;charset=UTF-8' : 'application/json;charset=UTF-8',
      ...opts.header
    },
    // params: { ..._opts.params },
    // baseURL,
    data: opts.data

  }


  if (!opts.white) {
    // options.params = {
    //   ...getCommonParams()
    // }
  }

  if (!Array.isArray(options.data) && options.data && !Object.keys(options.data).length && !sendFile) {
    delete options.data
  }

  // const sign = { ...options.params, body: options.data }
  // if (sendFile) {
  //   delete sign.body
  // }
  // options.params.sign = encrypt(sign)
  return options
}

const HTTP = new HttpRequest()

interface RequestOptions extends request.Option {
  baseURL?: string
  isForm?: boolean
  white?: boolean
  code?: string
}

/**
 * 抛出整个项目的api方法
 */
const Api = (() => {
  const fun = async <T = any>(opts: RequestOptions) => {
    if (
      typeof opts === 'string' &&
      ([] as string[]).indexOf(opts) === -1
    ) {
      // xxx
    }
    const newOpts = conbineOptions(opts)
    return HTTP.request<T>(newOpts)
  }
  return fun
})()

export default Api
