import authReducer from './authReducer';
import ingredientReducer from './ingredientReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    ingredient: ingredientReducer
});


export default rootReducer;