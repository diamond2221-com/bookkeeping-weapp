import BillTypeSelect from '@/components/bill-type-select'
import { TabItem, TabList } from '@/types/common'
import { Block, View } from '@tarojs/components'
import classnames from 'classnames'
import React, { Component } from 'react'
import './index.scss'


type PageStateProps = {
}

interface PageStates {
  selectTab: string
}

class Bookkeeping extends Component<PageStateProps, PageStates> {
  constructor(props) {
    super(props)
    this.state = {
      selectTab: this.tabList[0].code
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  private tabList: TabList = [
    {
      title: '支出',
      code: '1'
    },
    {
      title: '收入',
      code: '2'
    }
  ]

  private changeTabHandle = (tab: TabItem) => {
    this.setState((prevState) => {
      if (prevState.selectTab !== tab.code) {
        return {
          selectTab: tab.code
        }
      } else {
        return null
      }
    })
  }

  render() {
    const { tabList } = this
    const { selectTab } = this.state
    return (
      <View className='bookkeeping'>
        <View className='tab-wrap middle-all'>
          <View className='tab-container middle-all'>
            {
              tabList.map((v, i) => {
                return (
                  <Block key={v.code}>
                    <View onClick={this.changeTabHandle.bind(this, v)} className={classnames('tab-item middle-all', { select: selectTab === v.code })}>{v.title}</View>
                    {
                      i !== tabList.length - 1 && <View className='tab-item-line-wrap'><View className='tab-item-line'></View></View>
                    }
                  </Block>
                )
              })
            }
          </View>
          <BillTypeSelect selectTab={selectTab}></BillTypeSelect>
        </View>
      </View>
    )
  }
}

export default Bookkeeping
