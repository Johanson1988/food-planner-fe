import axios from 'axios';

export const getFoodList = (startDate, endDate) => (dispatch) => {
    axios.get(`http://localhost:5000/food?startDate=${startDate}&endDate=${endDate}`)
        .then(foodList => dispatch({ type: 'GET_FOOD_LIST', foodList }))
        .catch(error => dispatch({ type: 'GET_FOOD_LIST_ERROR', error}));
}