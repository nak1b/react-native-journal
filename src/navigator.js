import { createStackNavigator } from 'react-navigation'
import Post from './screens/Post'
import Home from './screens/Home'

export default createStackNavigator({
  Home: {
    screen: Home
  },
  Post: {
    screen: Post
  }
})
