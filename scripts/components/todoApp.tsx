import * as React from 'react';
import {AddTodo} from './addTodo';
import {FilterableTodoList} from './filterableTodoList';
import {FilterPanel} from './filterPanel';

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
