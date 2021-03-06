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
            console.log(initState);
            const foodProperties = {
                kcal: 0,
                fats: 0,
                saturatedFats: 0,
                carboHydrates: 0,
                sugar: 0,
                proteins: 0,
                salt: 0,
                fiber: 0,
            };
            //delete foodProperties.foodList;
            console.log(foodProperties);
            action.foodList.data.forEach(food => {
                console.log("hola", food.name);
                if (food.kcal > 0) foodProperties.kcal += food.kcal;
                if (food.fats > 0) foodProperties.fats += food.fats;
                if (food.saturatedFats > 0) foodProperties.saturatedFats += food.saturatedFats;
                if (food.carboHydrates > 0) foodProperties.carboHydrates += food.carboHydrates;
                if (food.sugar > 0) foodProperties.sugar += food.sugar;
                if (food.proteins > 0) foodProperties.proteins += food.proteins;
                if (food.fiber > 0) foodProperties.fiber += food.fiber;
                if (food.salt > 0) foodProperties.salt += food.salt;
            });      
            return { ...foodProperties, foodList: action.foodList.data };
        case 'GET_FOOD_LIST_ERROR':
            console.log('get food list error', action.error);
            return state;
        default:
            return state;
    }
}

export default foodReducer;