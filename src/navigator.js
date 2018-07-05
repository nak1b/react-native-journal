import { createStackNavigator } from 'react-navigation'

import Post     from './screens/Post'
import Home     from './screens/Home'
import NewPost  from './screens/NewPost'

export default createStackNavigator({
  Home: {
    screen: Home
  },
  Post: {
    screen: Post
  },
  NewPost: {
    screen: NewPost
  }
})
