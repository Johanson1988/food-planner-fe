import React, { Component } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';
import { getIngredients } from './../../../store/actions/ingredientActions';
import { addIngredientToFood } from './../../../store/actions/foodActions';
import IngredientCheckbox from './../ingredient/IngredientCheckbox';
import { updateFoodProperty } from './../../../store/actions/foodActions';
import { deleteIngredientFromFood } from './../../../store/actions/foodActions';
import { updateIngredientWeigth } from './../../../store/actions/foodActions';

class AddFood extends Component {
    state = {
        ingredientFilter: '',
    };

    componentDidMount() {
        M.AutoInit();
    }

    handleChange = e => {
        this.props.updateFoodProperty({ [e.target.name]: e.target.value });
    };

    handleFilter = e => {
        this.setState({ [e.target.name]: e.target.value } , () => this.props.getIngredients(`name=${this.state.ingredientFilter}`));
    };

    handleCheckbox = e => {
        const ingredientId = e.target.value;
        const isChecked = e.target.checked;
        isChecked ?
            this.props.addIngredientToFood(ingredientId) :
            this.props.deleteIngredientFromFood(ingredientId);
    }

    handleChangeIngredient = e => this.props.updateIngredientWeigth({ingredientId: e.currentTarget.name, weigth: e.currentTarget.value});
    

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
                    this.props.food.ingredients.length > 0 ?
                    <table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>weigth</th>
                                <th>kcal</th>
                                <th>fats</th>
                                <th>saturated fats</th>
                                <th>carbohydrates</th>
                                <th>sugar</th>
                                <th>proteins</th>
                                <th>salt</th>
                                <th>fiber</th>
                                <th>brand</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.food.ingredients.map(ingredient => 
                                <tr key={ingredient.name}>
                                    <td>{ingredient.name}</td>
                                    <td><input type='number' name={ingredient._id} onChange={this.handleChangeIngredient} value={ingredient.weigth} /></td>
                                    <td>{ingredient.updatedKcal}</td>
                                    <td>{ingredient.updatedFats}</td>
                                    <td>{ingredient.updatedSaturatedFats}</td>
                                    <td>{ingredient.updatedCarboHydrates}</td>
                                    <td>{ingredient.updatedSugar}</td>
                                    <td>{ingredient.updatedProteins}</td>
                                    <td>{ingredient.updatedSalt}</td>
                                    <td>{ingredient.updatedFiber}</td>
                                    <td>{ingredient.brand}</td>
                                </tr>)
                            }
                            <tr>
                                <td>TOTALS</td>
                                <td>-</td>
                                <td>{this.props.food.kcal}</td>
                                <td>{this.props.food.fats}</td>
                                <td>{this.props.foodsaturatedFats}</td>
                                <td>{this.props.food.carboHydrates}</td>
                                <td>{this.props.food.sugar}</td>
                                <td>{this.props.food.proteins}</td>
                                <td>{this.props.food.salt}</td>
                                <td>{this.props.food.fiber}</td>
                                <td>-</td>
                            </tr>
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
        addIngredientToFood: ingredientId => dispatch(addIngredientToFood(ingredientId)),
        updateFoodProperty: property => dispatch(updateFoodProperty(property)),
        deleteIngredientFromFood: ingredientId => dispatch(deleteIngredientFromFood(ingredientId)),
        updateIngredientWeigth: ingredient => dispatch(updateIngredientWeigth(ingredient)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFood);