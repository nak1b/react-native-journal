import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Posts extends Component {
  static navigationOptions = {
    title: 'Posts'
  }

  render() {
    console.log(this.props.data)

    return (
      <View>
        <Text>Posts</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

const postsQuery = gql`
  {
    allPosts{
      id
      title
    }
  }
`
export default graphql(postsQuery)(Posts)
