import React, { Component } from 'react'
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Post extends Component {
  static navigationOptions = {
    title: 'Post'
  }

  render() {
    const { loading, Post } = this.props

    if(loading) return <ActivityIndicator size="small" />

    return (
      <View>
        <Text>{Post.id}</Text>
        <Text>{Post.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

const postQuery = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id,
      title
    }
  }
`

export default graphql(postQuery, {
  props: ({data}) => ({ ...data }),
  options: ({navigation}) => ({
    variables: {
      id: navigation.state.params.id
    }
  })
})(Post)
