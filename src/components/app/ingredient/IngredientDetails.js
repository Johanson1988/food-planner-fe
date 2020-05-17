import React from 'react'

const IngredientDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section ingredient-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Ingredient - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perspiciatis est laborum delectus, iste quos neque minus laudantium eaque a ex esse maxime non debitis ipsum ullam vel qui dolores!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Rayban</div>
                    <div>20th Of May</div>
                </div>
            </div>
        </div>
    )
}

export default IngredientDetails;
