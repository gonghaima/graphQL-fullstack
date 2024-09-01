import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'; // Import ApolloClient and InMemoryCache
import { BrowserRouter } from 'react-router-dom';
import GridBackground from './components/ui/GridBackground.tsx';
import App from './App.tsx';
import './index.css';

const client = new ApolloClient({
  // TODO => Update the uri on production
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(), // Apollo Client uses to cache query results after fetching them.
  credentials: 'include',
});

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <GridBackground>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </GridBackground>
      </BrowserRouter>
    </React.StrictMode>
  );
}
