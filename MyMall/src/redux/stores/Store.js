import {createStore} from 'redux';
import reducers from '../reducers/Reducers';
import {combineReducers} from 'redux';
import wishreducers from '../reducers/Wishreducers';
import addressreducers from '../reducers/Addressreducers';
import orderreducers from '../reducers/Orderreducers';
const combinedreducers = combineReducers({reducers, wishreducers,addressreducers,orderreducers});
const store = createStore(combinedreducers);

export default store;