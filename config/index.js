// eslint-disable-next-line import/no-commonjs
const path = require('path')

const config = {
  projectName: 'bookkeeping-weapp',
  date: '2020-11-27',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  alias: {
    '@/main': path.resolve(__dirname, '..', 'src/main'),
    '@/types': path.resolve(__dirname, '..', 'src/types'),
    '@/network': path.resolve(__dirname, '..', 'src/network'),
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/store': path.resolve(__dirname, '..', 'src/store'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils')
  },
  sass: {
    resource: [
      path.resolve(__dirname, '..', 'src/styles/base.scss'),
      path.resolve(__dirname, '..', 'src/styles/variable.scss'),
      path.resolve(__dirname, '..', 'src/styles/mixin.scss')
    ]
  },
  copy: {
    patterns: [
      { from: 'src/components/vant-weapp/wxs', to: 'dist/components/vant-weapp/wxs' },
      { from: 'src/components/vant-weapp/wxs/utils.wxs', to: 'dist/components/vant-weapp/wxs/utils.wxs' },
      { from: 'src/components/vant-weapp/wxs/add-unit.wxs', to: 'dist/components/vant-weapp/wxs/add-unit.wxs' },
      { from: 'src/components/vant-weapp/wxs/array.wxs', to: 'dist/components/vant-weapp/wxs/array.wxs' },
      { from: 'src/components/vant-weapp/wxs/bem.wxs', to: 'dist/components/vant-weapp/wxs/bem.wxs' },
      { from: 'src/components/vant-weapp/wxs/memoize.wxs', to: 'dist/components/vant-weapp/wxs/memoize.wxs' },
      { from: 'src/components/vant-weapp/wxs/object.wxs', to: 'dist/components/vant-weapp/wxs/object.wxs' },
      { from: 'src/components/vant-weapp/common/style', to: 'dist/components/vant-weapp/common/style' },
      { from: 'src/components/vant-weapp/common/index.wxss', to: 'dist/components/vant-weapp/common/index.wxss' },
      { from: 'src/components/vant-weapp/calendar/index.wxs', to: 'dist/components/vant-weapp/calendar/index.wxs' },
      { from: 'src/components/vant-weapp/calendar/utils.wxs', to: 'dist/components/vant-weapp/calendar/utils.wxs' },
      { from: 'src/components/vant-weapp/calendar/calendar.wxml', to: 'dist/components/vant-weapp/calendar/calendar.wxml' },
      { from: 'src/components/vant-weapp/calendar/components/month/index.wxs', to: 'dist/components/vant-weapp/calendar/components/month/index.wxs' },
      { from: 'src/components/vant-weapp/calendar/components/month/index.wxs', to: 'dist/components/vant-weapp/calendar/components/month/index.wxs' },

      { from: 'src/components/vant-weapp/checkbox/index.wxs', to: 'dist/components/vant-weapp/checkbox/index.wxs' },
      {
        from: 'src/components/vant-weapp/picker-column/index.wxs', to: 'dist/components/vant-weapp/picker-column/index.wxs'
      },
      {
        from: 'src/components/vant-weapp/field/index.wxs', to: 'dist/components/vant-weapp/field/index.wxs'
      },
      { from: 'src/components/vant-weapp/slider/index.wxs', to: 'dist/components/vant-weapp/slider/index.wxs' },
      { from: 'src/components/vant-weapp/dropdown-menu/index.wxs', to: 'dist/components/vant-weapp/dropdown-menu/index.wxs' },
      { from: 'src/components/vant-weapp/share-sheet/index.wxs', to: 'dist/components/vant-weapp/share-sheet/index.wxs' },
      { from: 'src/components/vant-weapp/share-sheet/options.wxs', to: 'dist/components/vant-weapp/share-sheet/options.wxs' },
      { from: 'src/components/vant-weapp/share-sheet/options.wxs', to: 'dist/components/vant-weapp/share-sheet/options.wxs' },
      { from: 'src/components/vant-weapp/progress/index.wxs', to: 'dist/components/vant-weapp/progress/index.wxs' },
      { from: 'src/components/vant-weapp/sticky/index.wxs', to: 'dist/components/vant-weapp/sticky/index.wxs' },
      { from: 'src/components/vant-weapp/tree-select/index.wxs', to: 'dist/components/vant-weapp/tree-select/index.wxs' },
      { from: 'src/components/vant-weapp/tree-select/index.wxs', to: 'dist/components/vant-weapp/tree-select/index.wxs' },
      { from: 'src/components/vant-weapp/nav-bar/index.wxs', to: 'dist/components/vant-weapp/nav-bar/index.wxs' },
      { from: 'src/components/vant-weapp/tabs/index.wxs', to: 'dist/components/vant-weapp/tabs/index.wxs' },
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/van-/]
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
