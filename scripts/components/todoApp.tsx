import * as React from 'react';
import {connect} from 'react-redux';
import store from '../store/configureStore';
import {FilterLink} from './filterLink';
import {TodoList} from './todoList';
import {AddTodo} from './addTodo';
import {FilterPanel} from './filterPanel';
import {FilterableTodoList} from './filterableTodoList';

export class TodoApp extends React.Component<{}, {}> {
  private todoId: number = 0;
  render() {
    let input;
    return (
      <div>
        <AddTodo/>
        <FilterableTodoList/>
        <FilterPanel/>
      </div>
    );
  }
}

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
