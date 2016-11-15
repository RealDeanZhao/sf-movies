import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './modules/reducer';

const enhancer = compose(
    applyMiddleware(thunkMiddleware)
);

const initialState = {}

export default function finalCreateStore() {
    return createStore(reducers, initialState, enhancer)
}