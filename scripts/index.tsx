import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from './components/todo';
import store from './store/configureStore';

// const store = configureStore(initialState);
const render = () => {
  console.log('global state: ', store.getState());
  ReactDOM.render(
      <TodoApp todos={store.getState().todos} filter={store.getState().filter}/>,
    document.body
  );
}

store.subscribe(render);
render();
