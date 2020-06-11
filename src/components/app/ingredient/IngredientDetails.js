import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIngredients } from './../../../store/actions/ingredientActions';

class IngredientDetails extends Component {

    componentDidMount() {
        this.props.getIngredients(`_id=${this.props.match.params.id}`)
    }
    
    render () {

        return (
            <div className="container section ingredient-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{this.props.ingredient[0] ? this.props.ingredient[0].name : ''}</span>
                        <table>
                            <tbody>
                                <tr>
                                    <td>kcal</td>
                                    <td>{this.props.ingredient[0] ? this.props.ingredient[0].kcal : ''}</td>
                                </tr>
                                <tr>
                                    <td>fats</td>
                                    <td>{this.props.ingredient[0] ? this.props.ingredient[0].fats : ''}</td>
                                </tr>
                                <tr>
                                    <td>saturatedFats</td>
                                    <td>{this.props.ingredient[0] ? this.props.ingredient[0].saturatedFats : ''}</td>
                                </tr>
                                <tr>
                                    <td>carboHydrates</td>
                                    <td>{this.props.ingredient[0] ? this.props.ingredient[0].carboHydrates : ''}</td>
                                </tr>
                                <tr>
                                    <td>sugar</td>
                                    <td>{this.props.ingredient[0] ? this.props.ingredient[0].sugar : ''}</td>
                                </tr>
                                <tr>
                                    <td>proteins</td>
                                    <td>{this.props.ingredient[0] ? this.props.ingredient[0].proteins : ''}</td>
                                </tr>
                                <tr>
                                    <td>salt</td>
                                    <td>{this.props.ingredient[0] ? this.props.ingredient[0].salt : ''}</td>
                                </tr>
                                <tr>
                                    <td>brand</td>
                                    <td>{this.props.ingredient[0] ? this.props.ingredient[0].brand : ''}</td>
                                </tr>
                                <tr>
                                    <td>fiber</td>
                                    <td>{this.props.ingredient[0] ? this.props.ingredient[0].fiber : ''}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by Rayban</div>
                        <div>20th Of May</div>
                    </div>
                </div>
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
        getIngredients: (_id) => dispatch(getIngredients(_id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (IngredientDetails);
