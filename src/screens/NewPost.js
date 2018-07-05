import React, { Component } from 'react'
import { View, Button, TextInput, ActivityIndicator, Text, StyleSheet } from 'react-native'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class NewPost extends Component {
  state = {
    title : '',
    body  : ''
  }

  static navigationOptions = {
    title: 'New Post'
  }

  submit() {
    
  }

  render() {
    const { loading, Post } = this.props
    const { title, body } = this.state

    if(loading) return <ActivityIndicator size="small" />

    return (
      <View>
        <Text>New Post</Text>
        <TextInput
          value={title}
          onChangeText={title => this.setState({title})}
        />
        <TextInput
          value={body}
          onChangeText={body => this.setState({body})}
        />
        <Button
          onPress={() => this.submit()}
          title='Submit'
        />
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

export default NewPost
