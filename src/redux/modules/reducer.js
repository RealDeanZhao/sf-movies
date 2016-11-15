import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import movies from './movies';


export default combineReducers({
    movies,
    form: formReducer
});