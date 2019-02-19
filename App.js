import { createDrawerNavigator } from 'react-navigation'
import One from './src/screen1'
import {WHITE, BLUE } from './constants'

export default createDrawerNavigator(
  {
    Screen1: {
      screen: One,
      navigationOptions: {
        drawerLabel: 'Sayer',
        backgroundColor: {WHITE}
      }
    }
  },
  {
    initialRouteName: 'Screen1',
    contentOptions: {
      activeTintColor: BLUE,
      itemsContainerStyle: {
        marginVertical: 65,
        backgroundColor: {WHITE}
      }
    }
  }
)