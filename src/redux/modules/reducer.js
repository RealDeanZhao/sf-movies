import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import movies from './movies';
import search from './search';

export default combineReducers({
    movies,
    search,
    form: formReducer
});