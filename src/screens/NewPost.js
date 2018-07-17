import React, { Component } from 'react'
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Form, Item, Input, Label, Button, Content } from 'native-base'

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
      this.props.navigation.goBack()
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
        <Form>
          <Item floatingLabel style={styles.item}>
            <Label>Title</Label>
            <Input
              value={title}
              onChangeText={title => this.setState({title})}
            />
          </Item>
          <Item floatingLabel style={styles.item}>
            <Label>Body</Label>
            <Input
              multiline
              style={styles.body}
              value={body}
              onChangeText={body => this.setState({body})}
            />
          </Item>

        </Form>
        <Button
          style={styles.button}
          rounded
          onPress={() => this.submit()}>
          <Text style={styles.buttonText}>Create Post</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    marginTop: 24
  },
  body: {
    height: 160,
    textAlignVertical: 'top'
  },
  button: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 16,
    backgroundColor: '#e74c3c'
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF'
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
  name: 'newPost',
  options: {
    refetchQueries: ['postQuery']
  }
})(NewPost)
