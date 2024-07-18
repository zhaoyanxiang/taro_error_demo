// eslint-disable-next-line no-undef
export default {
  pages: [
    'pages/index/index'
  ],
  permission: {
    'scope.userLocation': {
      'desc': '你的位置信息将用于小程序位置接口展示'
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ECECEC',
    backgroundColor: '#ECECEC',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    backgroundColorBottom: '#ECECEC'
  },
  tabBar: {
    custom: true,
    color: '#999',
    selectedColor: '#000',
    backgroundColor: '#333333',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/tabs/home-active.png',
        selectedIconPath: 'assets/tabs/home-selected.png'
      },
    ]
  }
}
