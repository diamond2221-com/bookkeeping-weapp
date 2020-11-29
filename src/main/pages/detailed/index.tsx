import Tabbar from '@/components/custom-tab-bar/index'
import { getFullDate, getFullMonth, getFullYear } from '@/utils/date'
import { Picker, View, Image } from '@tarojs/components'
import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import arrowIcon from '../../assets/images/icon/arrow_solid.png'
import AmountList from './components/amount-list/index'
import './index.scss'


type PageStateProps = {
  store: {
    counterStore: {
      counter: number,
      increment: Function,
      decrement: Function,
      incrementAsync: Function
    }
  }
}

interface Index {
  props: PageStateProps;
}

@inject('store')
@observer
class Index extends Component {
  state = {
    year: getFullYear(),
    month: getFullMonth(),
    date: getFullDate(new Date()) as string,
    incomeAmount: 42.96,
    payAmount: 217.85
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  private onDateChange = (event: { detail: { value: string } }) => {
    const date = event.detail.value
    this.setState({
      date,
      year: date.split('-')[0],
      month: date.split('-')[1]
    })
  }

  render() {
    const { year, month, date, incomeAmount, payAmount } = this.state
    const { onDateChange } = this
    return (
      <View className='index'>
        <van-notify id='van-notify'></van-notify>
        <View className='header-bar'>
          <View className='date-wrap header-bar-item'>
            <View className='year item-title'>{year}</View>
            <Picker mode='date' onChange={onDateChange} fields='month' value={date}>
              <View className='month-wrap money-wrap'>
                <View className='right-line'></View>
                <View className='value'>{month}</View>
                <View className='unit'>月</View>
                <Image className='arrow-icon' src={arrowIcon}></Image>
              </View>
            </Picker>

          </View>

          <View className='income-wrap header-bar-item'>
            <View className='title item-title'>收入</View>
            <View className='money-wrap'>
              <View className='value'>{incomeAmount.toString().split('.')[0]}.</View>
              <View className='unit'>{incomeAmount.toString().split('.')[1]}</View>
            </View>

          </View>
          <View className='income-wrap header-bar-item'>
            <View className='title item-title'>支出</View>
            <View className='money-wrap'>
              <View className='value'>{payAmount.toString().split('.')[0]}.</View>
              <View className='unit'>{payAmount.toString().split('.')[1]}</View>
            </View>
          </View>
        </View>

        <AmountList></AmountList>

        <Tabbar selected={0}></Tabbar>
      </View>
    )
  }
}

export default Index
