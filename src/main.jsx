import React from 'react'
import { createRoot } from 'react-dom/client'
import {ApolloProvider} from '@apollo/client'
import client from './apollo.jsx'
import Component from './component.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <ApolloProvider>
      <App />
    </ApolloProvider>
)
