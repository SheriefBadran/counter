import * as Redux from 'redux';
import todos from './todo';
import filter from './visibilityFilter';

const rootReducer = Redux.combineReducers({todos, filter});

export default rootReducer;
