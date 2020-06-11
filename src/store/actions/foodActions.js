import axios from 'axios';

export const addIngredientToFood = (ingredientId) => (dispatch, getState) => {
  axios.get(`http://localhost:5000/ingredient?_id=${ingredientId}`)
    .then(ingredient => dispatch({ type: 'ADD_INGREDIENT_TO_FOOD', ingredient: ingredient.data[0]}))
    .catch(error => dispatch({ type: 'ADD_INGREDIENT_ERROR', error }));

  }

export const updateFoodProperty = foodProperty => {
  return {
    type: 'UPDATE_FOOD_PROPERTY',
    foodProperty
  }
}