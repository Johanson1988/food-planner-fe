import axios from 'axios';

export const addIngredientToFood = (ingredientId) => (dispatch, getState) => {
  axios.get(`http://localhost:5000/ingredient?_id=${ingredientId}`)
    .then(ingredient => dispatch({ type: 'ADD_INGREDIENT_TO_FOOD', ingredient: ingredient.data[0]}))
    .catch(error => dispatch({ type: 'ADD_INGREDIENT_ERROR', error }));

  }

export const addFood = food => (dispatch, getState) => {
    axios.post('http://localhost:5000/food', food)
        .then(() => dispatch({ type: 'ADD_FOOD', food }))
        .catch(error => dispatch({ type: 'ADD_FOOD_ERROR', error }));
}

export const updateFoodProperty = foodProperty => {
  return {
    type: 'UPDATE_FOOD_PROPERTY',
    foodProperty
  }
}

export const deleteIngredientFromFood = ingredientId => {
  return {
    type: 'DELETE_INGREDIENT_FROM_FOOD',
    ingredientId
  }
}

export const updateIngredientWeigth = ingredient => {
  return {
    type: 'UPDATE_INGREDIENT_WEIGHT',
    ingredient
  }
}