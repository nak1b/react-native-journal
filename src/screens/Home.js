import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Fab, Icon } from 'native-base'
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
        <Fab
          style={styles.fab}
          onPress={() => this.goToNewPost()}>
          <Icon name='add' />
        </Fab>
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
  fab: {
    backgroundColor: '#e74c3c'
  }
});

export default Home
