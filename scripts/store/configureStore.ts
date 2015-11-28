import * as Redux from 'redux';
import reducer from '../reducers/index';

const store = Redux.createStore(reducer);
export default store;
