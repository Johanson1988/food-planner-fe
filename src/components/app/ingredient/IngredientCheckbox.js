import React from 'react';

const IngredientCheckbox = ({ ingredient, handleCheckbox}) => {
    return (
        <div className="card z-depth-0 ingredient-summary" >
            <div className="card-content grey-text text-darken-3">
            <span className="card-title">{ingredient.name}</span>
                <label>
                    <input type="checkbox" className="filled-in" value={ingredient._id} onChange={handleCheckbox} />
                    <span />
                </label>
            </div>
        </div>
    )
}

export default IngredientCheckbox;