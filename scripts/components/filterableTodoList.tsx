import * as React from 'react';
import {TodoList} from './todoList';
import store from '../store/configureStore';

type Todo = {
  id: number,
  text: string,
  completed: boolean
}

export class FilterableTodoList extends React.Component<{}, {}> {
  private unsubscribe: Function;
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      console.log('force update');
      this.forceUpdate();
    });
  };

  componentWillUnmount() {
    console.log('unsubscribe');
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const state = store.getState();
    return (
      <TodoList
        todos={this.getFilteredTodos(state.todos, state.filter)}
        onTodoClick={id => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          });
        }}
      />
    );
  }

  private getFilteredTodos(todos:Todo[], filter) {
    switch(filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.completed);
    }
  }
}
