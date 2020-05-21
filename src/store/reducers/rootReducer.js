import authReducer from './authReducer';
import ingredientReducer from './ingredientReducer';
import foodReducer from './foodReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    ingredient: ingredientReducer,
    food: foodReducer
});


export default rootReducer;