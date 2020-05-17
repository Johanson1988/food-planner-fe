import React from 'react';
import IngredientSummary from './IngredientSummary';

const IngredientList = ({ingredients}) => {
    return (
        <div className="ingredient-list section">
            {
                ingredients && ingredients.map(ingredient => <IngredientSummary ingredient={ingredient} key={ingredient._id} />)
            }
        </div>
    )
}

export default IngredientList;