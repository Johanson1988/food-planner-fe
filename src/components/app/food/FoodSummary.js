import React from 'react';

const FoodSummary = (props) => {
    const { name, kcal, fats, saturatedFats, carboHydrates, sugar, proteins, salt, fiber, date, mealType } = props.food;
    return (
        <tr>
            <td>{name}</td>
            <td>{kcal}</td>
            <td>{fats}</td>
            <td>{saturatedFats}</td>
            <td>{carboHydrates}</td>
            <td>{sugar}</td>
            <td>{proteins}</td>
            <td>{salt}</td>
            <td>{fiber}</td>
            <td>{date}</td>
            <td>{mealType}</td>
        </tr>
    )
}

export default FoodSummary;