import React, { Component } from 'react';
import { connect } from 'react-redux';
import IngredientsList from './../ingredient/IngredientList';

class AddFood extends Component {
    state = {};

    render () {
        return (
            <div className="container">
                <form className="white">
                <h5 className="grey-text text-darken-3">Add New Food</h5>
                    
                    
                    <div className="input-field">
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddFood;