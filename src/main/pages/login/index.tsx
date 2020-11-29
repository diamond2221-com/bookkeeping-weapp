import { Button, Text, View } from '@tarojs/components'
import React, { Component } from 'react'
import './index.scss'

type PageStateProps = {
  store: {
  }
}

type PageStates = {
  counter: number
}

interface Login {
  props: PageStateProps;
  state: PageStates
}

// @inject('store')
// @observer
class Login extends Component<PageStateProps, PageStates> {
  constructor(props: Readonly<PageStateProps>) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  render() {
    const { counter } = this.state

    return (
      <View className='login'>
        <van-notify id='van-notify'></van-notify>

        <Button>异步添加</Button>
        <Text>{counter}</Text>
      </View>
    )
  }
}

export default Login
