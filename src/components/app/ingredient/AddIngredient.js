import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIngredient } from './../../../store/actions/ingredientActions';
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
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Add New Ingredient</h5>
                    
                    <div className="input-field">
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='kcal'>Kcal</label>
                        <input type='number' name='kcal' onChange={this.handleChange} value={this.state.kcal} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='fats'>Fats</label>                        
                        <input type='number' name='fats' onChange={this.handleChange} value={this.state.fats} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='saturatedFats'>Saturated Fats</label>
                        <input type='number' name='saturatedFats' onChange={this.handleChange} value={this.state.saturatedFats } />                        
                    </div>
                    <div className="input-field">
                        <label htmlFor='carboHydrates'>CarboHydrates</label>
                        <input type='number' name='carboHydrates' onChange={this.handleChange} value={this.state.carboHydrates} />                        
                    </div>
                    <div className="input-field">
                        <label htmlFor='sugar'>Sugar</label>
                        <input type='number' name='sugar' onChange={this.handleChange} value={this.state.sugar} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='proteins'>Proteins</label>
                        <input type='number' name='proteins' onChange={this.handleChange} value={this.state.proteins} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='salt'>Salt</label>
                        <input type='number' name='salt' onChange={this.handleChange} value={this.state.salt} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='fiber'>Fiber</label>
                        <input type='number' name='fiber' onChange={this.handleChange} value={this.state.fiber} />
                    </div>

                    <div className="input-field">
                        <label htmlFor='brand'>Brand</label>
                        <input type='text' name='brand' onChange={this.handleChange} value={this.state.brand} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="type">Type:
                    
                            <select name="type" onChange={this.handleChange} defaultValue={this.state.type} >
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

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: ingredient => dispatch(addIngredient(ingredient))
    }
}

export default connect(null, mapDispatchToProps) (AddIngredient);