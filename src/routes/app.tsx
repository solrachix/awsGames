import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'

import Home from '../pages/Home'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Header />
      <Switch>
        
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
