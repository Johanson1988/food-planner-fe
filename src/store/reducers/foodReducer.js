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
        case 'ADD_INGREDIENT':
            console.log('Ingredient added: ', action.ingredient);
            const { ingredients } = state;
            ingredients.push(action.ingredient);
            return { ...state, ingredients };
        default:
            return state;
    }
}

export default foodReducer;