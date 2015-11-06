import initialState from '../intitialState';
import {CounterType} from '../actions/counter';

export default function counter(state, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case CounterType.Increment:
      newState.currentValue += 1;
      return newState;
    case CounterType.Decrement:
      newState.currentValue -= 1;
      return newState;
    default:
      return state || initialState().counter;
  }
}
