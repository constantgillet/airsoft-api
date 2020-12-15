import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'

function App(props) {

  return (
    <div>
      <Route exact path='/' component={HomePage}/>
    </div>
  );
}

export default App;