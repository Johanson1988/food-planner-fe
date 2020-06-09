import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIngredient, getIngredientById } from './../../../store/actions/ingredientActions';
import M from 'materialize-css';

class AddIngredient extends Component {
    state = {
        name: '',
        kcal: '',
        fats: '',
        saturatedFats: '',
        carboHydrates: '',
        sugar: '',
        proteins: '',
        salt: '',
        brand: '',
        type: '',
        fiber: ''
    };

    handleChange = e => this.setState({[e.target.name]:e.target.value});

    handleSubmit = e => {
        e.preventDefault();
        this.props.addIngredient(this.state);
        Object.keys(this.state).forEach(ingredientProperty => this.setState({[ingredientProperty]: ''}));
    }

    componentDidMount() {
        M.AutoInit();
        const _id = this.props.match.params.id;
        console.log('did monunt', _id);
        this.props.getIngredientById(_id);
    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Add New Ingredient</h5>
                    
                    <div className="input-field">
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' onChange={this.handleChange} value={this.props.ingredient ? this.props.ingredient.name : ''} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='kcal'>Kcal</label>
                        <input type='number' name='kcal' onChange={this.handleChange} value={this.props.ingredient ? this.props.ingredient.kcal : ''} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='fats'>Fats</label>                        
                        <input type='number' name='fats' onChange={this.handleChange} value={this.props.ingredient ? this.props.ingredient.fats : ''} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='saturatedFats'>Saturated Fats</label>
                        <input type='number' name='saturatedFats' onChange={this.handleChange} value={this.props.ingredient ? this.props.ingredient.saturatedFats : ''} />                        
                    </div>
                    <div className="input-field">
                        <label htmlFor='carboHydrates'>CarboHydrates</label>
                        <input type='number' name='carboHydrates' onChange={this.handleChange} value={this.props.ingredient ? this.props.ingredient.carboHydrates : ''} />                        
                    </div>
                    <div className="input-field">
                        <label htmlFor='sugar'>Sugar</label>
                        <input type='number' name='sugar' onChange={this.handleChange} value={this.props.ingredient ? this.props.ingredient.sugar : ''} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='proteins'>Proteins</label>
                        <input type='number' name='proteins' onChange={this.handleChange} value={this.props.ingredient ? this.props.ingredient.proteins : ''} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='salt'>Salt</label>
                        <input type='number' name='salt' onChange={this.handleChange} value={this.props.ingredient ? this.props.ingredient.salt : ''} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='fiber'>Fiber</label>
                        <input type='number' name='fiber' onChange={this.handleChange} value={this.props.ingredient ? this.props.ingredient.fiber : ''} />
                    </div>

                    <div className="input-field">
                        <label htmlFor='brand'>Brand</label>
                        <input type='text' name='brand' onChange={this.handleChange} value={this.props.ingredient ? this.props.ingredient.brand : ''} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="type">Type:
                    
                            <select name="type" onChange={this.handleChange} defaultValue={this.props.ingredient ? this.props.ingredient.type : "default"} >
                                <option value="default" hidden>Select an Option</option> 
                                <option value="legumes">legumes</option>
                                <option value="edible plants">edible plants</option>
                                <option value="edible fungi">edible fungi</option>
                                <option value="edible nuts and seeds">edible nuts and seeds</option>
                                <option value="baked goods">baked goods</option>
                                <option value="breads">breads</option>
                                <option value="dairy products">dairy products</option>
                                <option value="eggs">eggs</option>
                                <option value="meat">meat</option>
                                <option value="cereals">cereals</option>
                                <option value="seafood">seafood</option>
                            </select>
                        </label>
                    </div>

                    <div className="input-field">
                        <button className="btn waves-effect waves-light" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredient: state.ingredient
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: ingredient => dispatch(addIngredient(ingredient)),
        getIngredientById: _id => dispatch(getIngredientById(_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddIngredient);