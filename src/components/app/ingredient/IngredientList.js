import React, { Component } from 'react';
import IngredientSummary from './IngredientSummary';
import { connect } from 'react-redux';
import { getIngredients } from './../../../store/actions/ingredientActions';
import { Link } from 'react-router-dom';


class IngredientList extends Component {
    state = { ingredientFilter: '' };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value } , () => this.props.getIngredients(`name=${this.state.ingredientFilter}`));
        
    };

    render () { 
        const { ingredients } = this.props;
        return (
            <div className="ingredient-list section">
                <div className="input-field">
                    <label htmlFor='ingredientFilter'>Search ingredient</label>
                    <input type='text' name='ingredientFilter' onChange={this.handleChange} />                        
                </div>
                {
                    ingredients && ingredients.map(ingredient => <Link to={`/ingredient/${ingredient._id}`} ><IngredientSummary ingredient={ingredient} key={ingredient._id} /></Link>)
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('state in maptstatetoprops', state)
    return {
        ingredients: state.ingredient
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getIngredients: (query) => dispatch(getIngredients(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientList);