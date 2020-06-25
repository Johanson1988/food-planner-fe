import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getFoodList } from './../../../store/actions/foodListAction';
import FoodSummary from './FoodSummary';
import DateTimePicker from 'react-datetime-picker';
import styled from 'styled-components';

const FoodList = props => {
    const [startDate, setStartDate] = useState(new Date(new Date().setHours(0,0,0,0)));
    const [endDate, setEndDate] = useState(new Date());
    
    useEffect(() => {   
        props.getFoodList(startDate, endDate);
        // eslint-disable-next-line  
    }, []);
    
    const handleDate = (startDate, endDate) => {
        console.log(startDate);
        setStartDate(startDate);
        setEndDate(endDate);
        props.getFoodList(startDate, endDate);
    }

    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `;

    return (
    
    <div className="container">

        <Title>Food List</Title>
        <div className="input-field">
            <label>Start date:</label>
            <DateTimePicker name="start-date" onChange={startDate=>handleDate(startDate, endDate)} value={startDate} />
        </div>

        <div className="input-field">
            <label>End date:</label>
            <DateTimePicker name="end-date" onChange={endDate=>handleDate(startDate, endDate)} value={endDate} />
        </div>
        
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
    </div>
    )
}

const mapStateToProps = state => {
    return {
        foodList: state.foodList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFoodList: (startDate, endDate) => dispatch(getFoodList(startDate, endDate)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FoodList);