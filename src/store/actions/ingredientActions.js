import axios from 'axios';

export const addIngredient = ingredient => async (dispatch, getState) => {
    
    await axios.post('http://localhost:5000/ingredient', ingredient)
        .then(response => console.log(response))
        .catch(error => console.error(error));

    dispatch({type: 'ADD_INGREDIENT', ingredient});
}