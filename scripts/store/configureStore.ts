import * as Redux from 'redux';
import reducer from '../reducers/index';
import initialState from '../intitialState';

const store = Redux.createStore(reducer);
export default store;
