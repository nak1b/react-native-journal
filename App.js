import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Navigator from './src/navigator'

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjikl2pzz1omm01918ts7n6a8"
})

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    );
  }
}
