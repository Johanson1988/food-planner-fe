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
    weight: 0,
    type: null
};

const foodReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_FOOD':
            return state;
        case 'ADD_FOOD_ERROR':
            console.log('create food error', action.error);
            return state;
        case 'ADD_INGREDIENT_TO_FOOD':
            const ingredients = [...state.ingredients, action.ingredient];
            return { ...state, ingredients };
        case 'ADD_INGREDIENT_TO_FOOD_ERROR':
            console.log('Ingredient added to food error: ', action.error);
            return state;
        case 'DELETE_INGREDIENT_FROM_FOOD':
            const newIngredients = state.ingredients.filter(ingredient => ingredient._id !== action.ingredientId);
            return { ...state, ingredients: newIngredients };
        case 'UPDATE_FOOD_PROPERTY':
            return { ...state, ...action.foodProperty };
        case 'UPDATE_INGREDIENT_WEIGHT':
            console.log(action.ingredient);
            //const ingredientToUpdate = state.ingredients.filter(ingredient => action.ingredientId === ingredient._id);
            return state;
        default:
            return state;
    }
}

export default foodReducer;