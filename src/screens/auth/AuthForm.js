import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Form, Item, Input, Button, Label } from 'native-base'

class AuthForm extends Component {
  state = {
    email    : '',
    password : ''
  }

  submitForm = () => {

  }

  render() {
    return (
      <Form>
        <Item floatingLabel style={styles.item}>
          <Label>Email</Label>
          <Input
            keyboardType='email-address'
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </Item>
        <Button
          rounded
          style={styles.button}
          onPress={this.submitForm}
        >
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </Button>
      </Form>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 10
  },
  button: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 16,
    backgroundColor: '#e74c3c'
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF'
  }
})
export default AuthForm
