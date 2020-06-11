import React, { Component } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';
import { getIngredients } from './../../../store/actions/ingredientActions';
import { addIngredientToFood } from './../../../store/actions/foodActions';
import IngredientCheckbox from './../ingredient/IngredientCheckbox';
import { updateFoodProperty } from './../../../store/actions/foodActions';

class AddFood extends Component {
    state = {
        food: {
            name: '',
            kcal: '',
            fats: '',
            saturatedFats: '',
            carboHydrates: '',
            sugar: '',
            proteins: '',
            salt: '',
            type: '',
            fiber: '',
            ingredients: [],
        },
        ingredientFilter: '',
    };

    componentDidMount() {
        M.AutoInit();
    }

    handleChange = e => {
        this.props.updateFoodProperty({ [e.target.name]: e.target.value });
       // this.setState( { food: { ...this.state.food,  [e.target.name]: e.target.value } } );
    };

    handleFilter = e => {
        this.setState({ [e.target.name]: e.target.value } , () => this.props.getIngredients(`name=${this.state.ingredientFilter}`));
    };

    handleCheckbox = e => {
        const ingredientId = e.target.value;
        const isChecked = e.target.checked;
        isChecked ?
            this.setState( { food:  { ...this.state.food, ingredients: [...this.state.food.ingredients, ingredientId] } }, () => this.props.addIngredientToFood(this.state.food.ingredients)) :
            this.setState( {food: { ...this.state.food, ingredients: [...this.state.food.ingredients.filter(ingredient => ingredient !== ingredientId)] } }, () => this.props.addIngredientToFood(this.state.food.ingredients) );
    }

    render () {
        const { ingredients } = this.props;
        return (
            <div className="container">
                <form className="white">
                <h5 className="grey-text text-darken-3">Add New Food</h5>
                <div className="input-field">
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
                </div>
                <div className="input-field">
                    <label htmlFor="type">Type:
                        <select name="type" onChange={this.handleChange} defaultValue={this.state.type} >
                            <option value="default" hidden>Select an Option</option> 
                            <option value="vegan">Vegan</option>
                            <option value="meat">Meat</option>
                            <option value="fish">Fish</option>
                        </select>
                    </label>
                </div>
                <h1>Visca el barça</h1>
                {
                    this.state.food.ingredients.length > 0 ?
                    <table>
                        <tbody>
                            {
                                this.state.food.ingredients.map(ingredient => <tr><td>{ingredient}</td></tr>)
                            }
                        </tbody>
                    </table> :
                    null
                }
                <div className="ingredient-list section row">
                    <div className="input-field">
                        <label htmlFor='ingredientFilter'>Search ingredient</label>
                        <input type='text' name='ingredientFilter' onChange={this.handleFilter} />                        
                    </div>
                    {
                        ingredients && ingredients.map(ingredient => <IngredientCheckbox ingredient={ingredient} key={ingredient._id} handleCheckbox={this.handleCheckbox} />)
                    }
                </div>
                    
                <div className="input-field">
                    <button type='submit'>Submit</button>
                </div>
                
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredient,
        food: state.food,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getIngredients: (query) => dispatch(getIngredients(query)),
        addIngredientToFood: (selectedIngredients) => dispatch(addIngredientToFood(selectedIngredients)),
        updateFoodProperty: property => dispatch(updateFoodProperty(property)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFood);