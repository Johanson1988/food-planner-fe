const initState = {
    ingredients: [
        {_id: '1', name: 'dummy ing', kcal: 85},
        {_id: '2', name: 'dummy ing2', kcal: 85},
        {_id: '3', name: 'dummy ing3', kcal: 85},
        {_id: '4', name: 'dummy ing4', kcal: 85},
    ]
};

const ingredientReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            console.log('Ingredient added: ', action.ingredient);
            break;
    }
    return state;
}

export default ingredientReducer;