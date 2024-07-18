import { Component } from 'react'
import { Provider } from 'react-redux'
import dva from './utils/dva'
import models from './modals/index'
import './app.less'

const dvaApp = dva.createApp({
  initialState: {},
  models: models
})
const store = dvaApp.getStore()

class App extends Component {

  componentDidMount() {

  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
