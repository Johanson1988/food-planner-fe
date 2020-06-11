const initState = {
    name: null,
    ingredients: [],
    kcal: 0,
    fats: 0,
    saturatedFats: 0,
    carboHydrates: 0,
    sugar: 0,
    proteins: 0,
    salt: 0,
    type: null
};

const foodReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_FOOD':
            console.log('Food added: ', action.food);
            return state;
        case 'ADD_FOOD_ERROR':
            console.log('create food error', action.error);
            return state;
        case 'ADD_INGREDIENT_TO_FOOD':
            console.log('Ingredient added to foods: ', action.ingredient);
            const ingredients = [...state.ingredients, action.ingredient];
            return { ...state, ingredients };
        case 'ADD_INGREDIENT_TO_FOOD_ERROR':
            console.log('Ingredient added to food error: ', action.error);
            return state;
        case 'DELETE_INGREDIENT_FROM_FOOD':
            console.log('Deleted ingredient from food: ', action.ingredientId);
            const newIngredients = state.ingredients.filter(ingredient => ingredient._id !== action.ingredientId);
            return { ...state, ingredients: newIngredients };
        case 'UPDATE_FOOD_PROPERTY':
            console.log('Updated food property', action.foodProperty);
            return { ...state, ...action.foodProperty };
        default:
            return state;
    }
}

export default foodReducer;