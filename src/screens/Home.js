import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
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

  render() {
    return (
      <View style={styles.container}>
        <Posts {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Home
