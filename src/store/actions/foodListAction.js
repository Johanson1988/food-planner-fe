import axios from 'axios';

export const getFoodList = () => (dispatch) => {
    axios.get(`http://localhost:5000/food`)
        .then(foodList => dispatch({ type: 'GET_FOOD_LIST', foodList }))
        .catch(error => dispatch({ type: 'GET_FOOD_LIST_ERROR', error}));
}