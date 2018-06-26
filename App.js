import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Post from './src/screens/Post'
import Posts from './src/screens/Posts'
import navStyles from './src/styles/navStyles'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjikl2pzz1omm01918ts7n6a8"
})

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
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Posts {...this.props} />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
