import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Post extends Component {
  static navigationOptions = {
    title: 'Post'
  }

  render() {
    return (
      <View>
        <Text>Post</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
