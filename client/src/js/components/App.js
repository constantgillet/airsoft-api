import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import StatusPage from '../pages/StatusPage/StatusPage'

function App(props) {

  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/StatusPage' component={StatusPage}/>
    </div>
  );
}

export default App;