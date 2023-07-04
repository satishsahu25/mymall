import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/stores/Store'
import MainContainer from './src/MainContainer'

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>
  )
}

export default App

