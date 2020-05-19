import React from 'react';

const IngredientSummary = ({ingredient}) => {
    return (
        <div className="card z-depth-0 ingredient-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{ingredient.name}</span>
                    <label>
                        <input type="checkbox" class="filled-in" checked="checked" />
                        <span />
                    </label>
                </div>
            </div>
    )
}

export default IngredientSummary;