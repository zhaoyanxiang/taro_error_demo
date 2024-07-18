import Taro from '@tarojs/taro'
import atob from 'atob'
import config from './config'

export default {
  parse() {
    let token = this.get()
    if (!token) {
      return ''
    }
    try {
      const arr = token.split('.')
      if (arr.length === 3) {
        token = atob(token.split('.')[1])
      }
      return JSON.parse(token)
    } catch (ex) {
      this.remove()
      return false
    }
  },
  check() {
    try {
      const payload = this.parse()

      return Object.keys(payload).length !== 0
    } catch (ex) {
      this.remove()
      return false
    }
  },
  get() {
    return Taro.getStorageSync(config.tokenKey)
  },
  save(token) {
    Taro.setStorageSync(config.tokenKey, token)
  },
  remove() {
    Taro.removeStorageSync(config.tokenKey)
    Taro.removeStorageSync('OPENID')
  },
}
