import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Counter from './components/counter';
import store from './store/configureStore';

// const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Counter/>
  </Provider>,
  document.body
);
