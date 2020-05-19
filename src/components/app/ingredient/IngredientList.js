import React, { Component } from 'react';
import IngredientSummary from './IngredientSummary';


class IngredientList extends Component {
    state = {ingredientFilter: ''};
    handleChange = e => this.setState({[e.target.name]:e.target.value});
    render (){
        const { ingredients } = this.props;
        return (
            <div className="ingredient-list section">
                <div className="input-field">
                    <label htmlFor='ingredientFilter'>Search ingredient</label>
                    <input type='text' name='ingredientFilter' onChange={this.handleChange} />                        
                </div>
                {
                    ingredients && ingredients.filter(ingredient => ingredient.name.includes(this.state)).map(ingredient => <IngredientSummary ingredient={ingredient} key={ingredient._id} />)
                }
            </div>
        )
    }
}

export default IngredientList;