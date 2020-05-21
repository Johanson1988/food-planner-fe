import React from 'react';
import { Link } from 'react-router-dom';

const IngredientSummary = ({ ingredient }) => {
    return (
        <div className="card z-depth-0 ingredient-summary" >
            <div className="card-content grey-text text-darken-3">
            <Link to={`/ingredient/${ingredient._id}`} >
                <span className="card-title">{ingredient.name}</span>
                <p>{ingredient.brand}</p>
            </Link>
            </div>
        </div>
    )
}

export default IngredientSummary;