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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component= { Dashboard } />
          <Route path="/ingredient/:id" component={AddIngredient} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/add-ingredient" component={AddIngredient} />
          <Route path="/ingredients" component={IngredientList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
