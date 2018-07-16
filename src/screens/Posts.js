import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { List, ListItem, Body, Right, Icon } from 'native-base'

class Posts extends Component {
  static navigationOptions = {
    title: 'Posts'
  }

  _goToPost({id, title}) {
    this.props.navigation.navigate('Post', {
      id,
      title
    })
  }

  _renderItem(item) {
    return (
      <ListItem onPress={() => this._goToPost(item)}>
        <Body>
          <Text>{item.title}</Text>
        </Body>
        <Right>
          <Icon name='arrow-forward' />
        </Right>
      </ListItem>
    )
  }

  render() {
    const { loading, allPosts } = this.props

    if(loading) return <ActivityIndicator size="small" />

    return (
      <View>
        <List>
          <FlatList
            data={allPosts}
            renderItem={({item}) => this._renderItem(item)}
            keyExtractor={item => item.id}
          />
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

const postsQuery = gql`
  query postQuery {
    allPosts {
      id
      title
    }
  }
`

export default graphql(postsQuery, {
  props: ({data}) => ({ ...data })
})(Posts)
