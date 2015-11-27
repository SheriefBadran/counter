import * as React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import actions from '../actions/counter';
import store from '../store/configureStore';
import {FilterLink} from './filterLink';

type Todo = {
  id: number,
  text: string,
  completed?: boolean
}
type Properties = {
  todos: Todo[],
  filter: string
};

class TodoApp extends React.Component<Properties, {}> {
  private todoId: number = 0;
  constructor(props) {
    super(props);
  };

  render() {
    const {todos, filter} = this.props;
    console.log("What is filter for type: ", typeof this.props.filter);
    const filteredTodos = this.getFilteredTodos(todos, filter);
    let input;
    return (
      <div>
        <input ref={node => {
          input = node;
        }} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: input.value,
            id: this.todoId++
          });
          input.value = '';
        }}>
          Add Todo
        </button>
        <div>
          <ul>
            {
              filteredTodos.map((todo) =>
                <li key={todo.id} onClick={() => {
                  store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: todo.id
                  });
                }}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none'
                }}>
                  {todo.text}
                </li>
              )
          }
          </ul>
          <p>
            Show:
            {' '}
            <FilterLink filter='SHOW_ALL' currentActive={filter}>
              All
            </FilterLink>

            {' '}
            <FilterLink filter='SHOW_ACTIVE' currentActive={filter}>
              Active
            </FilterLink>

            {' '}
            <FilterLink filter='SHOW_COMPLETED' currentActive={filter}>
              Completed
            </FilterLink>
          </p>
        </div>
      </div>
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
export default TodoApp;

// The "connect" decorator takes, as its first parameter, a function that will select which slice of your
// state you want to expose to your component. This function is logically called a "selector".
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter.currentValue
//   };
// }
//
// const mapDispatchToProps = (dispatch) => {
//   // return bindActionCreators(CounterActions, dispatch);
//   return {
//     increment() {
//       dispatch(actions.increment());
//     },
//     decrement() {
//       dispatch(actions.decrement());
//     }
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
