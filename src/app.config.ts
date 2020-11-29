export default {
  pages: [
    'main/pages/detailed/index',
    'main/pages/bookkeeping/index',
    'main/pages/login/index',
    'main/pages/my/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ffd82c',
    navigationBarTitleText: 'Diamond记账',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#2c2c2c',
    selectedColor: '#ffd82c',
    list: [
      {
        pagePath: 'main/pages/detailed/index',
        text: '明细',
        iconPath: 'main/assets/images/tabbar/detailed_def.png',
        selectedIconPath: 'main/assets/images/tabbar/detailed_sel.png',
      },
      {
        pagePath: 'main/pages/my/index',
        text: '我的',
        iconPath: 'main/assets/images/tabbar/my_def.png',
        selectedIconPath: 'main/assets/images/tabbar/my_sel.png',
      }
    ]

  },
  usingComponents: {
    "van-calendar": "./components/vant-weapp/calendar/index",
    "van-cell": "./components/vant-weapp/cell/index",
    "van-notify": "./components/vant-weapp/notify/index",
    'van-button': './components/vant-weapp/button/index',
    'van-icon': './components/vant-weapp/icon/index',
    'van-image': './components/vant-weapp/image/index',
    "van-row": "./components/vant-weapp/row/index",
    "van-col": "./components/vant-weapp/col/index",
    "van-popup": "./components/vant-weapp/popup/index",
    "van-transition": "./components/vant-weapp/transition/index",
    "van-checkbox": "./components/vant-weapp/checkbox/index",
    "van-checkbox-group": "./components/vant-weapp/checkbox-group/index",
    "van-datetime-picker": "./components/vant-weapp/datetime-picker/index",
    "van-field": "./components/vant-weapp/field/index",
    "van-picker": "./components/vant-weapp/picker/index",
    "van-radio": "./components/vant-weapp/radio/index",
    "van-radio-group": "./components/vant-weapp/radio-group/index",
    "van-rate": "./components/vant-weapp/rate/index",
    "van-search": "./components/vant-weapp/search/index",
    "van-slider": "./components/vant-weapp/slider/index",
    "van-sidebar-item": "./components/vant-weapp//sidebar-item/index",
    "van-stepper": "./components/vant-weapp/stepper/index",
    "van-switch": "./components/vant-weapp/switch/index",
    "van-uploader": "./components/vant-weapp/uploader/index",
    "van-action-sheet": "./components/vant-weapp/action-sheet/index",
    "van-dialog": "./components/vant-weapp/dialog/index",
    "van-dropdown-menu": "./components/vant-weapp/dropdown-menu/index",
    "van-dropdown-item": "./components/vant-weapp/dropdown-item/index",
    "van-loading": "./components/vant-weapp/loading/index",
    "van-overlay": "./components/vant-weapp/overlay/index",
    "van-share-sheet": "./components/vant-weapp/share-sheet/index",
    "van-swipe-cell": "./components/vant-weapp/swipe-cell/index",
    "van-toast": "./components/vant-weapp/toast/index",
    "van-circle": "./components/vant-weapp/circle/index",
    "van-collapse": "./components/vant-weapp/collapse/index",
    "van-collapse-item": "./components/vant-weapp/collapse-item/index",
    "van-count-down": "./components/vant-weapp/count-down/index",
    "van-divider": "./components/vant-weapp/divider/index",
    "van-empty": "./components/vant-weapp/empty/index",
    "van-notice-bar": "./components/vant-weapp/notice-bar/index",
    "van-panel": "./components/vant-weapp/panel/index",
    "van-progress": "./components/vant-weapp/progress/index",
    "van-skeleton": "./components/vant-weapp/skeleton/index",
    "van-steps": "./components/vant-weapp/steps/index",
    "van-sticky": "./components/vant-weapp/sticky/index",
    "van-tag": "./components/vant-weapp/tag/index",
    "van-tree-select": "./components/vant-weapp/tree-select/index",
    "van-grid": "./components/vant-weapp/grid/index",
    "van-grid-item": "./components/vant-weapp/grid-item/index",
    "van-index-bar": "./components/vant-weapp/index-bar/index",
    "van-index-anchor": "./components/vant-weapp/index-anchor/index",
    "van-sidebar": "./components/vant-weapp/sidebar/index",
    "van-nav-bar": "./components/vant-weapp/nav-bar/index",
    "van-tab": "./components/vant-weapp/tab/index",
    "van-tabs": "./components/vant-weapp/tabs/index",
    "van-tabbar": "./components/vant-weapp/tabbar/index",
    "van-tabbar-item": "./components/vant-weapp/tabbar-item/index",
    "van-area": "./components/vant-weapp/area/index",
    "van-card": "./components/vant-weapp/card/index",
    "van-submit-bar": "./components/vant-weapp/submit-bar/index",
    "van-goods-action": "./components/vant-weapp/goods-action/index",
    "van-goods-action-icon": "./components/vant-weapp/goods-action-icon/index",
    "van-goods-action-button": "./components/vant-weapp/goods-action-button/index"
  }
}
