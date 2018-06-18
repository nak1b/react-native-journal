import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Post from './src/screens/Post'
import navStyles from './src/styles/navStyles'

class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
    ...navStyles
  }

  goToPost = () => {
    this.props.navigation.navigate('Post')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.goToPost}
          title='Go to post page'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createStackNavigator({
  Home: {
    screen: App
  },
  Post: {
    screen: Post
  }
})
