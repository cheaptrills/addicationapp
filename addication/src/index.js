import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {GlobalProvider} from './context/GlobalContext';
import { UserProvider } from './context/UserContext';
import { DiaryProvider } from './context/DiaryContext';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: '/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <DiaryProvider>
      <UserProvider>
        <GlobalProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
        </GlobalProvider>
      </UserProvider>
    </DiaryProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
