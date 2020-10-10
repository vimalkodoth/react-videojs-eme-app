import {createStore} from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

const x = "";

export default store;