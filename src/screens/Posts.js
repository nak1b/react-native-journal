import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Posts extends Component {
  static navigationOptions = {
    title: 'Posts'
  }

  render() {
    const { loading, allPosts } = this.props

    if(loading) return <ActivityIndicator size="small" />

    return (
      <View>
        <FlatList
          data={allPosts}
          renderItem={({item}) => {
            return (
              <Text>{item.title}</Text>
            )
          }}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

const postsQuery = gql`
  {
    allPosts {
      id
      title
    }
  }
`

export default graphql(postsQuery, {
  props: ({data}) => ({ ...data })
})(Posts)
