import React from 'react'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import Post         from './screens/Post'
import Home         from './screens/Home'
import NewPost      from './screens/NewPost'
import Login        from './screens/auth/Login'
import Register     from './screens/auth/Register'
import AuthLoading  from './screens/auth/AuthLoading'

const AuthStack = createStackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  }
})

const AppStack = createStackNavigator({
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

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)
