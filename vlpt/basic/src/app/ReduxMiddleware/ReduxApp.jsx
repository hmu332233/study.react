import React, { useContext } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Counter from './CounterContainer';

function ReduxApp() {
  return (
      <Provider store={store}>
        <Counter />
      </Provider>
  );
};

export default ReduxApp;