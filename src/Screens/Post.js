import React, { Component } from 'react'
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Post extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    }
  }

  render() {
    const { loading, Post } = this.props

    if(loading) return <ActivityIndicator size="small" />

    return (
      <View>
        <Text>{Post.body}</Text>
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
      title,
      body
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
