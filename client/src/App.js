import React from 'react'
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

import Container from '@material-ui/core/Container'

import Contacts from './components/lists/Contacts'
import './App.css'
import AddContactContainer from './containers/AddContactContainer'

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <Container className='App'>
      <AddContactContainer />
      <Contacts />
    </Container>
  </ApolloProvider>
)

export default App
