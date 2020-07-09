import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import ListReducer from '../reducer/ListReducer';

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleWare(ListReducer);

export default store;