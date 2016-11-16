import { combineReducers } from 'redux';
import movies from './movies';
import search from './search';
import suggestions from './suggestions';

export default combineReducers({
    movies,
    search,
    suggestions
});