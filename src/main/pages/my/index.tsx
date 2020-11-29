import { View } from '@tarojs/components'
import React, { Component } from 'react'
import Tabbar from '@/components/custom-tab-bar/index'
import './index.scss'

type PageStateProps = {
  store: {
  }
}

type PageStates = {
}

interface Login {
  props: PageStateProps;
  state: PageStates
}

class Login extends Component<PageStateProps, PageStates> {
  constructor(props: Readonly<PageStateProps>) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {

    return (
      <View className='login'>
        <van-notify id='van-notify'></van-notify>
        my
        <Tabbar selected={2}></Tabbar>
      </View>
    )
  }
}

export default Login
