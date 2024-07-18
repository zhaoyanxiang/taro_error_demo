import Taro from '@tarojs/taro'
import config from '../utils/config'
import { buildAuthorization } from './index'

//你也可以自己封装request
export default (options = { data: {} }) => {
  return Taro.request({
    url: config.baseUrl + options.url,
    data: {
      ...options.data
    },
    header: {
      'Content-Type': 'application/json',
      AppId: config.appId,
      Authorization: buildAuthorization()
    },
    method: options.method || 'GET',
    timeout: 10000
  }).then((res) => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (data.msg !== 'success') {
        // Taro.showToast({
        //   // title: `${res.data.msg}~` || res.data.code,
        //   title: res.data.code,
        //   icon: 'none',
        //   mask: true,
        // });
      }
      return data;
    } else if (statusCode === 401) {
      Taro.removeStorageSync(config.tokenKey)
      Taro.removeStorageSync(config.sessionKey)
      // Taro.navigateTo({ url: '/pages/index/login' })
    } else {
      Taro.hideLoading()
      // throw new Error(`网络请求错误，状态码${statusCode}`);
    }
    return { code: 0, msg: data.msg }
  }).catch(res => {
    Taro.showToast({ title: res.errMsg, duration: 2000, icon: 'none' }).then()
  })
}
