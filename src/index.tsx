import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from '@apollo/client';

import App from './pages/index';
import { client } from './services/apollo-client';
import GlobalCss from './settings/styles/global';
import { StateProvider } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <GlobalCss />
    <ApolloProvider client={client}>
      <StateProvider>
        <App />
      </StateProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
