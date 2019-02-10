import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import reducers from './reducers';

import { Provider } from 'react-redux';

const store = createStore(reducers);

// //현재 상태를 출력한다
// console.log(store.getState());

// //store에 변화가 있을때마다 실행된다
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// //액션 객체를 dispatch를 통해 실행한다
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([200, 200, 200]));

// unsubscribe();


ReactDOM.render(
  <Provider store={store}>
  	<App/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
