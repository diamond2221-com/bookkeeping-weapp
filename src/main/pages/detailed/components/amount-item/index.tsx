import React, { Component } from 'react'
import { View} from '@tarojs/components'

import './index.scss'

type PageStateProps = {
}

interface AmountItem {
  props: PageStateProps;
}

class AmountItem extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='amount-item' hoverClass='touch-style' hoverStayTime={200}>
        <View className='amount-item-icon-wrap'>
          <View className='icon'></View>
        </View>
        <View className='amount-item-content'>
          <View className='remark'>美团买菜。</View>
          <View className='money'>-22.6</View>
          <View className='border-bottom'></View>
        </View>
      </View>
    )
  }
}

export default AmountItem
