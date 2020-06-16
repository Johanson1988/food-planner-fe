const initState = [];

const foodReducer = (state = initState, action) => {
    switch(action.type) {
        case 'GET_FOOD_LIST':
            console.log('food list reducer',action.foodList)      
            return action.foodList.data;
        case 'GET_FOOD_LIST_ERROR':
            console.log('get food list error', action.error);
            return state;
        default:
            return state;
    }
}

export default foodReducer;