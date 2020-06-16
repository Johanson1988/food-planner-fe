import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Navbar  from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import IngredientDetails from './components/app/ingredient/IngredientDetails';
import SignIn from './components/auth/Signin';
import SignUp from './components/auth/Signup';
import AddIngredient from './components/app/ingredient/AddIngredient';
import IngredientList from './components/app/ingredient/IngredientList';
import AddFood from './components/app/food/AddFood';
import FoodList from './components/app/food/FoodList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component= { Dashboard } />
          <Route path="/ingredient/:id" component={IngredientDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/add-ingredient" component={AddIngredient} />
          <Route path="/ingredients" component={IngredientList} />
          <Route path="/add-food" component={AddFood} />
          <Route path="/view-foods" component={FoodList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
