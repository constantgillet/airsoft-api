import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PricingPage from '../pages/PricingPage/PricingPage'
import StatusPage from '../pages/StatusPage/StatusPage'
import DocumentationPage from '../pages/DocumentationPage/DocumentationPage'
import Contribute from '../pages/contribute/contribute'

function App(props) {

  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/pricing' component={PricingPage}/>
      <Route exact path='/status' component={StatusPage}/>
      <Route exact path='/documentation' component={DocumentationPage}/>
      <Route exact path='/contribute' component={Contribute}/>
    </div>
  );
}

export default App;