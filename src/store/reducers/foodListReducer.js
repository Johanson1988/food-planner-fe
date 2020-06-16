const initState = {
    foodList: [],
    kcal: 0,
    fats: 0,
    saturatedFats: 0,
    carboHydrates: 0,
    sugar: 0,
    proteins: 0,
    salt: 0,
    fiber: 0,
};

const foodReducer = (state = initState, action) => {
    switch(action.type) {
        case 'GET_FOOD_LIST':
            console.log('food list reducer',action.foodList)      
            return { ...state, foodList: action.foodList.data };
        case 'GET_FOOD_LIST_ERROR':
            console.log('get food list error', action.error);
            return state;
        default:
            return state;
    }
}

export default foodReducer;