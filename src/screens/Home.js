import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import navStyles from '../styles/navStyles'
import Posts from './Posts'

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
    ...navStyles
  }

  goToPost = () => {
    this.props.navigation.navigate('Post')
  }

  goToNewPost = () => {
    this.props.navigation.navigate('NewPost')
  }

  render() {
    return (
      <View style={styles.container}>
        <Posts {...this.props} />
        <TouchableHighlight
          onPress={() => this.goToNewPost()} 
          style={styles.button}>
          <Text style={styles.buttonText}>NEW POST</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },

  button: {
    backgroundColor: '#e74c3c',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1
  }
});

export default Home
