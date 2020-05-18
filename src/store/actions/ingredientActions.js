import axios from 'axios';

export const addIngredient = ingredient => (dispatch, getState) => {
    
    axios.post('http://localhost:5000/ingredient', ingredient)
        .then(() => dispatch({type: 'ADD_INGREDIENT', ingredient}))
        .catch(error => dispatch({type: 'ADD_INGREDIENT_ERROR', error}));
}