import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-fermin.ferminmartin.vercel.app',
  // LOCAL
  // uri: 'http://localhost:3500/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
