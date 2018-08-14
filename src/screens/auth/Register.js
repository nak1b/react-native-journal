import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import AuthForm from './AuthForm'

class Register extends Component {
  static navigationOptions = {
    title: 'Create Account'
  }

  submitForm = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <AuthForm
          type='Register'
          onSubmit={this.submitForm}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})

export default Register
