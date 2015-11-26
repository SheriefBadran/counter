import * as Redux from 'redux';
import todos from './todo';
import visibilityFilter from './visibilityFilter';

const rootReducer = Redux.combineReducers({todos, visibilityFilter});

export default rootReducer;
