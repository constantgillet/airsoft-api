import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PricingPage from '../pages/PricingPage/PricingPage'

function App(props) {

  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/pricing-page' component={PricingPage}/>
    </div>
  );
}

export default App;