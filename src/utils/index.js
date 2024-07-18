import Taro from '@tarojs/taro'
import jwt from './jwt-token'

export const buildAuthorization = () => {
  const token = jwt.get()
  return token !== '' ? `Bearer ${token}` : ''
}

export const tabPagePaths = ['/pages/index/index', '/pages/index/oso', '/pages/index/my']

export const CouponType = {
  'introduce': '转介绍',
  'invite': '好友邀请',
  'school': '开学季',
  'summer': '暑假班',
  'winter': '寒假班',
  'welfare': '福利卡',
  'gift': '礼品兑换卡',
  // 'grammar': 'OSO免费语法课',
  'exchange': '兑换券',
  'general': '通用',
  'exclusive': '专享券',
  'oso': 'OSO',
}


export const WritePhotosAlbum = () => {
  return new Promise(resolve => {
    Taro.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          Taro.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              resolve(true)
            }, fail() {
              Taro.showModal({
                title: '授权',
                content: '您拒绝了授权请求，是否要手动开启？',
                success: function (modalRes) {
                  if (modalRes.confirm) {
                    Taro.openSetting({
                      success() {
                        resolve(false)
                      }, fail() {
                        resolve(false)
                      }
                    }).then()
                  } else if (modalRes.cancel) {
                    resolve(false)
                    Taro.showToast({ title: '用户拒绝了授权', duration: 2000, icon: 'none' }).then()
                  }
                }
              }).then()
            }
          }).then()
        } else {
          resolve(true)
        }
      }, fail() {
        resolve(false)
        Taro.showToast({ title: '用户拒绝了授权', duration: 2000, icon: 'none' }).then()
      }
    }).then()
  })
}
