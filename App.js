import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/sceenes/SearchScreen'
import {Provider} from './src/contexts/Context'
import RestrantDetailsScreen from './src/sceenes/RestrantDetailsScreen'

const stackNavigator = createStackNavigator(
{
  search: SearchScreen,
  details: RestrantDetailsScreen
}, {
  initialRouteName: 'search',
  defaultNavigationOptions: {
    title: 'HELLO'
  }
})

const App = createAppContainer(stackNavigator)

export default ()=> {
  return (
    <Provider>
      <App/>
    </Provider>
  )
}