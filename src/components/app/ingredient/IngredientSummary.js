import React from 'react';

const IngredientSummary = ({ingredient}) => {
    return (
        <div className="card z-depth-0 ingredient-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{ingredient.name}</span>
                    <p>Created by Johann</p>
                    <p className="grey-text">20th of May</p>
                </div>
            </div>
    )
}

export default IngredientSummary;