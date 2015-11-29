import * as Redux from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

const store = Redux.applyMiddleware(thunk)(Redux.createStore)(reducer);
export default store;
