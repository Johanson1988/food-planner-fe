import React, { Component } from 'react';
import Notifications from './Notifications';
import IngredientList from '../app/ingredient/IngredientList';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render () {
        const { ingredients } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <IngredientList ingredients={ingredients} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredient.ingredients
    }
}

export default connect(mapStateToProps)(Dashboard);