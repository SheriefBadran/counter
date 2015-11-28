import * as React from 'react';
import store from '../store/configureStore';

export class AddTodo extends React.Component<{}, {}> {
  private todoId: number = 0;
  render() {
    let input;
    return(
      <div>
        <input ref={(node) => {input = node;}} />
        <button onClick={(text) => {
          store.dispatch({
            type: 'ADD_TODO',
            id: this.todoId++,
            text: input.value
          });
          input.value = '';
        }}>
          Add Todo
        </button>
      </div>
    )
  }
}
