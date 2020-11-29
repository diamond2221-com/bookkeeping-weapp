import { View } from '@tarojs/components'
import React, { Component } from 'react'
import './index.scss'

type PageStateProps = {
}

interface Bookkeeping {
  props: PageStateProps;
}

class Bookkeeping extends Component {
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='bookkeeping'>
        记一笔账吧
      </View>
    )
  }
}

export default Bookkeeping
