export const addIngredientToFood = (selectedIngredients) => {
    return {
      type: 'ADD_INGREDIENT_TO_FOOD',
      selectedIngredients
    }
  }

export const updateFoodProperty = foodProperty => {
  return {
    type: 'UPDATE_FOOD_PROPERTY',
    foodProperty
  }
}