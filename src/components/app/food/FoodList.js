import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFoodList } from './../../../store/actions/foodListAction';
import FoodSummary from './FoodSummary';

const FoodList = props => {
    useEffect(() => {    // Update the document title using the browser API
        props.getFoodList();
        // eslint-disable-next-line  
    }, []);
   

    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>kcal</th>
                    <th>fats</th>
                    <th>saturated fats</th>
                    <th>carbohydrates</th>
                    <th>sugar</th>
                    <th>proteins</th>
                    <th>salt</th>
                    <th>fiber</th>
                    <th>date</th>
                    <th>meal type</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.foodList.map((food, index) => <FoodSummary key={index} food={food} />)
                }
                <tr>

                </tr>
            </tbody>
        </table>
    )
}

const mapStateToProps = state => {
    return {
        foodList: state.foodList.foodList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFoodList: () => dispatch(getFoodList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FoodList);