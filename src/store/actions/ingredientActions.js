import axios from 'axios';

export const addIngredient = ingredient => (dispatch, getState) => {
    axios.post('http://localhost:5000/ingredient', ingredient)
        .then(() => dispatch({ type: 'ADD_INGREDIENT', ingredient }))
        .catch(error => dispatch({ type: 'ADD_INGREDIENT_ERROR', error }));
}

export const getIngredients = (query) => (dispatch) => {
    axios.get(`http://localhost:5000/ingredient?${query}`)
        .then(ingredients => dispatch({ type: 'GET_INGREDIENTS', ingredients }))
        .catch(error => dispatch({ type: 'GET_INGREDIENTS_ERROR', error}));
}

export const getIngredientById = (_id) => (dispatch) => {
    console.log('ingredient acyion', _id);
    axios.get(`http://localhost:5000/ingredient?_id=${_id}`)
        .then(ingredient => {
            console.log(ingredient.data);
            dispatch({ type: 'GET_INGREDIENT_BY_ID', ingredient: ingredient.data[0] })})
        .catch(error => dispatch({ type: 'GET_INGREDIENT_BY_ID_ERROR', error}));
}