import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'native-base'
import AuthForm from './AuthForm'

class Login extends Component {
  static navigationOptions = {
    title: 'Login'
  }

  submitForm = () => {

  }

  createAccount = () => {
    this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <View style={styles.container}>
        <AuthForm
          type='Login'
          onSubmit={this.submitForm}
        />
        <Button
          style={styles.button}
          onPress={this.createAccount}
        >
          <Text style={styles.buttonText}>Dont have account ?</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  button: {
    position: 'absolute',
    bottom: 12,
    alignSelf: 'center',
    backgroundColor: 'transparent'
  },
  buttonText: {
    fontSize: 16,
    color: '#5d5d5d'
  }
})

export default Login
