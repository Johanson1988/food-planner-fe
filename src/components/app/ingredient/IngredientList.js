import React, { Component } from 'react';
import IngredientSummary from './IngredientSummary';
import { connect } from 'react-redux';
import { getIngredients } from './../../../store/actions/ingredientActions';
import { addIngredientToFood } from './../../../store/actions/foodActions';


class IngredientList extends Component {
    state = {
        ingredientFilter: '',
        selectedIngredients: []
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value } , () => this.props.getIngredients(`name=${this.state.ingredientFilter}`));
    };

    handleCheckbox = e => {
        const ingredientId = e.target.value;
        const isChecked = e.target.checked;
        console.log(ingredientId);
        isChecked ?
            this.setState( { selectedIngredients: [...this.state.selectedIngredients, ingredientId] }, () => this.props.addIngredientToFood(this.state.selectedIngredients)) :
            this.setState( { selectedIngredients: [...this.state.selectedIngredients.filter(ingredient => ingredient !== ingredientId)] }, () => this.props.addIngredientToFood(this.state.selectedIngredients) );
    }

    render () { 

        const { ingredients } = this.props;
        return (
            <div className="ingredient-list section">
                <div className="input-field">
                    <label htmlFor='ingredientFilter'>Search ingredient</label>
                    <input type='text' name='ingredientFilter' onChange={this.handleChange} />                        
                </div>
                {
                    ingredients && ingredients.map(ingredient => <IngredientSummary ingredient={ingredient} key={ingredient._id} handleCheckbox={this.handleCheckbox} />)
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredient
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getIngredients: (query) => dispatch(getIngredients(query)),
        addIngredientToFood: (selectedIngredients) => dispatch(addIngredientToFood(selectedIngredients))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientList);