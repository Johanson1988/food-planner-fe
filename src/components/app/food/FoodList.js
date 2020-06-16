import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFoodList } from './../../../store/actions/foodListAction';
import FoodSummary from './FoodSummary';

const FoodList = props => {
    useEffect(() => {    // Update the document title using the browser API
        props.getFoodList();
        // eslint-disable-next-line  
    }, []);
   
    console.log(props);
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
                    props.foodList.foodList ? props.foodList.foodList.map((food, index) => <FoodSummary key={index} food={food} />) : null
                }
                <tr>
                    <th>TOTAL</th>
                    <th>{props.foodList.kcal}</th>
                    <th>{props.foodList.fats}</th>
                    <th>{props.foodList.saturatedFats}</th>
                    <th>{props.foodList.carboHydrates}</th>
                    <th>{props.foodList.sugar}</th>
                    <th>{props.foodList.proteins}</th>
                    <th>{props.foodList.salt}</th>
                    <th>{props.foodList.fiber}</th>
                    <th>{props.foodList.date}</th>
                    <th>{props.foodList.mealType}</th>
                </tr>
            </tbody>
        </table>
    )
}

const mapStateToProps = state => {
    return {
        foodList: state.foodList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFoodList: () => dispatch(getFoodList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FoodList);