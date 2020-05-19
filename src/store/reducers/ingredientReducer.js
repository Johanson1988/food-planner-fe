const initState = [];

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
            return [...state, ...action.ingredients.data];
        case 'GET_INGREDIENTS_ERROR':
            console.log('Error getting ingredients list: ', action.error);
            return state;
        default:
            return state;
    }
}

export default ingredientReducer;