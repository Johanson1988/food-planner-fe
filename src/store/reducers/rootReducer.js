import authReducer from './authReducer';
import ingredientReducer from './ingredientReducer';
import foodReducer from './foodReducer';
import foodListReducer from './foodListReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    ingredient: ingredientReducer,
    food: foodReducer,
    foodList: foodListReducer,
});


export default rootReducer;