import { View } from '@tarojs/components'
import React, { Component } from 'react'
import './index.scss'

type PageStateProps = {
  selectTab: string
}

interface PageStates {
}

class BillTypeSelect extends Component<PageStateProps, PageStates> {
  constructor(props) {
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
    const { selectTab } = this.props
    return (
      <View className='bill-type-select-wrap'>
      </View>
    )
  }
}

export default BillTypeSelect
