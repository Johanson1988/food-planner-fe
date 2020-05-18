import axios from 'axios';

const initState = () => axios.get('http://localhost:5000/ingredient')
    .then((response) => response)
    .catch(error => error);

const ingredientReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            console.log('Ingredient added: ', action.ingredient);
            return state;
        case 'ADD_INGREDIENT_ERROR':
            console.log('create ingredient error', action.error);
            return state;
        default:
            return state;
    }
}

export default ingredientReducer;