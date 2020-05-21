import React from 'react';
import { NavLink } from 'react-router-dom';


const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to ="/add-ingredient">Add Ingredient</NavLink>></li>
            <li><NavLink to ="/ingredients">View Ingredients</NavLink>></li>
            <li><NavLink to ="/">Add food</NavLink>></li>
            <li><NavLink to ="/">View foods</NavLink>></li>
        {
            //<li><NavLink to ="/">Add Menu</NavLink>></li>
            //<li><NavLink to ="/">View Menus</NavLink>></li>
            //<li><NavLink to ="/">Log out</NavLink>></li>
        }
            <li><NavLink to ="/" className="btn btn-floating pink lighten-1">JJ</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;