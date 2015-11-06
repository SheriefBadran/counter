import * as React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import actions from '../actions/counter';

type State = {};
type Properties = {
  increment?: Function,
  decrement?: Function,
  counter?: number
};

class Counter extends React.Component<Properties, State> {
  constructor(props) {
    super(props);
  };


  render() {
    return (
      <div>
        <h2>Counter</h2>
        <button onClick={() => this.props.decrement()}>-</button>
        <button onClick={() => this.props.increment()}>+</button>
        <p>{this.props.counter}</p>
      </div>
    );
  }
}

// The "connect" decorator takes, as its first parameter, a function that will select which slice of your
// state you want to expose to your component. This function is logically called a "selector".
const mapStateToProps = (state) => {
  return {
    counter: state.counter.currentValue
  };
}

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators(CounterActions, dispatch);
  return {
    increment() {
      dispatch(actions.increment());
    },
    decrement() {
      dispatch(actions.decrement());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
