import React, { Component } from 'react';
import IngredientSummary from './IngredientSummary';
import { connect } from 'react-redux';
import { getIngredients } from './../../../store/actions/ingredientActions';
import { addIngredient } from './../../../store/actions/foodActions';


class IngredientList extends Component {
    state = {
        ingredientFilter: '',
        selectedIngredients: new Map()
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value } , () => this.props.getIngredients(`name=${this.state.ingredientFilter}`));
    };

    handleCheckbox = e => {
        const ingredientId = e.target.value;
        console.log(e.target)
        console.log('ingredientId: ',ingredientId);
        const isChecked = e.target.checked;
        this.setState(prevState => ({ selectedIngredients: prevState.selectedIngredients.set(ingredientId, isChecked)}), () => console.log(this.state));

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
        addIngredient: (_id) => dispatch(addIngredient(_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientList);