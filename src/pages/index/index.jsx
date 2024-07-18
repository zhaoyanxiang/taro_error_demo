import { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import './index.less'

const VipColor = ['#3A8DA4', '#C58495', '#D08C43', '#BF9663', '#B1ADA9', '#635D96', '#2A2A2F']

@connect(({ app }) => ({ app }))
class Index extends Component {

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  componentDidShow() {

  }

  componentDidHide() {
  }

  render() {
    return (
      <View className='index_page'>
        <View className='container'>

        </View>
      </View>
    )
  }
}

export default Index
