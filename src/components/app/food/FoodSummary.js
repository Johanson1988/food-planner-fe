import React from 'react';

const FoodSummary = (props) => {
    console.log(props.food.name);
    const {name} = props.food;
    return (
        <tr>
            <td>{name}</td>
        </tr>
    )
}

export default FoodSummary;