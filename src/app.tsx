import Taro from "@tarojs/taro";
import { Provider } from "mobx-react";
import React, { Component } from "react";
import "./app.scss";
import appStore from "./store/app";
import counterStore from "./store/counter";

import('./utils/push_sdk.js')

// if ( __devtoolsConfig.network.request.indexOf("https://plog.xiaoshentui.com") !== -1 ) {
//   Taro.showModal({
//     title: "小神推提示",
//     content: "配置成功,请进行下一步",
//   });
// } else {
//   Taro.showModal({
//     title: "小神推提示",
//     content: "配置失败,请核查",
//   });
// }

const store = {
  counterStore,
  appStore,
};

class App extends Component {
  componentDidMount() {}

  componentDidShow() {
    Taro.login().then(res => {
      Taro.request({
        url: 'http://192.168.1.196:7001/api/weapp/login',
        method: 'POST',
        data: {code: res.code}
      }).then((res1) => {
        // console.log(res1.data.data.openid)
        wx.aldPushSendOpenid(res1.data.data.openid)
      })
    })
  }

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 就是要渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
