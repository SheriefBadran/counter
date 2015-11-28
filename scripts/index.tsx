import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {TodoApp} from './components/todoApp';
import store from './store/configureStore';

// const store = configureStore(initialState);

  ReactDOM.render(
      <TodoApp/>,
    document.body
  );
