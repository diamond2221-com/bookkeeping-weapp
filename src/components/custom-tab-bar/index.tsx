/* eslint-disable import/no-commonjs */
import detailed_def from '@/main/assets/images/tabbar/detailed_def.png'
import detailed_sel from '@/main/assets/images/tabbar/detailed_sel.png'
import my_def from '@/main/assets/images/tabbar/my_def.png'
import my_sel from '@/main/assets/images/tabbar/my_sel.png'
import addIcon from '@/main/assets/images/tabbar/add.png'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import classnames from 'classnames'
import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import "./index.scss"

interface Props {
  selected: number
}

interface TabBarItem {
  className?: string
  pagePath: string;
  text: string;
  iconPath: string;
  selectedIconPath: string;
  pageType?: 'normal' | 'tabbar'
}

const Tabbars: TabBarItem[] = [
  {
    pagePath: '/main/pages/detailed/index',
    text: '明细',
    iconPath: detailed_def,
    selectedIconPath: detailed_sel,
  },
  {
    className: 'add',
    pagePath: '/main/pages/bookkeeping/index',
    text: '记账',
    iconPath: addIcon,
    selectedIconPath: addIcon,
    pageType: 'normal',
  },
  {
    pagePath: '/main/pages/my/index',
    text: '我的',
    iconPath: my_def,
    selectedIconPath: my_sel,
  }
]

interface Tabbar {
  props: Props,
  state: {
  }
}

@inject('store')
@observer
class Tabbar extends Component {
  constructor(props: Props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.setState({
    })
  }

  private switchTabPage = (tab: TabBarItem) => {
    if (tab.pageType === 'normal') {
      Taro.navigateTo({ url: tab.pagePath })
    } else {
      Taro.switchTab({ url: tab.pagePath })
    }
  }

  render() {
    const { switchTabPage } = this
    const { selected } = this.props

    return (
      <View className='tabbar-wrap'>
        <View className='tabbar-container'>
          <View className='tab-bar-border'></View>
          {
            Tabbars.map((v, i) => {
              const isSelected = selected === i
              return (
                <View className={classnames('tabbar-item', { selected: isSelected }, v.className)} key={v.pagePath} onClick={switchTabPage.bind(this, v)}>
                  <Image className='tabbar-item-icon' src={isSelected ? v.selectedIconPath : v.iconPath}></Image>
                  <View className='tabbar-item-text' >{v.text}</View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default Tabbar
