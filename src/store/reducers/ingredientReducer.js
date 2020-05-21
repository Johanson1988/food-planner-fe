const initState = null;

const ingredientReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            console.log('Ingredient added: ', action.ingredient);
            return state;
        case 'ADD_INGREDIENT_ERROR':
            console.log('create ingredient error', action.error);
            return state;
        case 'GET_INGREDIENTS':
            console.log('Got ingredients list: ', action.ingredients.data);
            return [...action.ingredients.data];
        case 'GET_INGREDIENTS_ERROR':
            console.log('Error getting ingredients list: ', action.error);
            return state;
        case 'GET_INGREDIENT_BY_ID':
            console.log('Get Ingredient by ID', action.ingredient.name);
            return action.ingredient;
        case 'GET_INGREDIENT_BY_ID_ERROR':
            console.log('Error getting Ingredient by ID', action.error);
            return state;
        default:
            return state;
    }
}

export default ingredientReducer;