import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import NewItemScreen from './NewItemScreen'
import CommentScreen from './CommentScreen'
import {
  HOME_SCREEN,
  NEW_ITEM_SCREEN,
  COMMENT_SCREEN
} from '../routes'

export default createStackNavigator(
  {
    [HOME_SCREEN]: HomeScreen,
    [NEW_ITEM_SCREEN]: NewItemScreen,
    [COMMENT_SCREEN]: CommentScreen
  },
  {
    initialRouteName: HOME_SCREEN,
    headerMode: 'none'
  }
)