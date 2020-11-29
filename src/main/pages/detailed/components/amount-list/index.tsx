import React, { Component } from 'react'
import { View} from '@tarojs/components'
import AmountItem from '../amount-item/index'

import './index.scss'

type PageStateProps = {
}

interface AmountList {
  props: PageStateProps;
}

class AmountList extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='amount-list'>
        <View className='item-head'>
          <View className='date-wrap'>
            <View className='date'>11月29日 </View>
            <View className='day'>星期日</View>
          </View>
          <View className='money-wrap'>
            <View className='type-txt'>支出：</View>
            <View className='money'>22.6</View>
          </View>
          <View className='bottom-line'></View>
        </View>
        <View className='amount-list-container'>
          <AmountItem></AmountItem>
          <AmountItem></AmountItem>
          <AmountItem></AmountItem>
          <AmountItem></AmountItem>
          <AmountItem></AmountItem>
        </View>
      </View>
    )
  }
}

export default AmountList
