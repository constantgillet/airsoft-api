import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PricingPage from '../pages/PricingPage/PricingPage'
import StatusPage from '../pages/StatusPage/StatusPage'
import AddGunPage from '../pages/AddGunPage/AddGunPage'

function App(props) {

  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/PricingPage' component={PricingPage}/>
      <Route exact path='/StatusPage' component={StatusPage}/>
      <Route exact path='/AddGunPage' component={AddGunPage}/>
    </div>
  );
}

export default App;