import React, { Component } from 'react';
import Notifications from './Notifications';
import IngredientList from '../app/ingredient/IngredientList';
import { connect } from 'react-redux';
import { getIngredients } from './../../store/actions/ingredientActions';

class Dashboard extends Component {

    getIngredients = e => {
        e.preventDefault();
        this.props.getIngredients();
    }

    render () {
        //const { ingredients } = this.props;
        console.log('Dashboard Props', this.props);
        console.log('Dashboard State:', this.state);
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <IngredientList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
                <div className="input-field">
                    <button type='button' onClick={this.getIngredients}>Update ingredients</button>
                </div>
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
        getIngredients: () => dispatch(getIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);