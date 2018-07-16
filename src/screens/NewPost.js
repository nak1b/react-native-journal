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
    const { title, body } = this.state

    this.props.newPost({
      variables: {
        title,
        body
      }
    })
    .then(() => {

    })
    .catch(err => {
      console.log(err)
    })


  }

  render() {
    const { loading, Post } = this.props
    const { title, body } = this.state

    if(loading) return <ActivityIndicator size="small" />

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={title}
          placeholder='Title'
          onChangeText={title => this.setState({title})}
        />
        <TextInput
          style={styles.input}
          value={body}
          placeholder='Body'
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
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white'
  },
  input: {
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#5d5d5d',
    marginBottom: 12
  }
})

const newPost = gql`
  mutation newPost($title:String!, $body:String!) {
    createPost(title:$title, body:$body) {
      id
    }
  }
`

export default graphql(newPost, {
  name: 'newPost'
})(NewPost)
