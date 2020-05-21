export const addIngredientToFood = (selectedIngredients) => {
    return {
      type: 'ADD_INGREDIENT_TO_FOOD',
      selectedIngredients
    }
  }