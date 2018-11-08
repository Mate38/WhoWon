import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Routes from './routes';
import reducers from './reducers';

const store = createStore(reducers);

export default props => (
  <Provider store={store}>
    <Routes />
  </Provider>
)
