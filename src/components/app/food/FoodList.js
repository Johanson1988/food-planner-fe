import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFoodList } from './../../../store/actions/foodListAction';

const FoodList = props => {
    useEffect(() => {    // Update the document title using the browser API
        props.getFoodList();
        // eslint-disable-next-line  
    }, []);
   

    return (
        <h1>Food List</h1>
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