import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link';
import { ApolloProvider } from '@apollo/react-hooks'
import { getMainDefinition } from 'apollo-utilities'

import Subscription from './Subscription'

const client = new ApolloClient({
  link: split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    new WebSocketLink({
      uri: `ws://localhost:4000/graphql`,
      options: {
        reconnect: true
      }
    }),
    new HttpLink({
      uri: 'http://localhost:4000',
      credentials: 'same-origin'
    }),
  ),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Subscription />
      </div>
    </ApolloProvider>
  );
}

export default App;
