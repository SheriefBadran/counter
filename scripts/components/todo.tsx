import * as React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import actions from '../actions/counter';
import store from '../store/configureStore';

type State = {};
type Todo = {
  id?: number,
  text?: string,
  completed?: boolean
}
type Properties = {
  todos: Todo[]
};

class TodoApp extends React.Component<Properties, State> {
  private todoId: number = 0;
  constructor(props) {
    super(props);
  };

  render() {
    let input:any;
    // console.log("component props todos:", this.props.todos);
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
            this.props.todos.map((todo) =>
              <li key={todo.id}>
                {todo.text}
              </li>
            )
        }
        </ul>
        </div>
      </div>
    );
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
