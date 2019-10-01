const { ApolloServer, PubSub, gql } = require('apollo-server')

const pubsub = new PubSub()

setInterval(() => {
  pubsub.publish('RANDOM', { angka: Math.floor(Math.random() * 1000) })
}, 1000)

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Subscription {
    angka: Int
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world'
  },
  Subscription: {
    angka: {
      subscribe: () => pubsub.asyncIterator('RANDOM')
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()
  .then(({url, subscriptionsUrl}) => {
    console.log(`🚀 Server ready at ${url}`);
    console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
  })
