import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import Nav from './components/Nav'
import Hero from './components/Hero'
import Create from './components/Create'
import View from './components/View'
import Take from './components/Take'
import Edit from './components/Edit'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Hero} />
      <Route path={process.env.PUBLIC_URL + '/view'} component={View} />
      <Route path={process.env.PUBLIC_URL + '/create'} component={Create} />
      <Route path={process.env.PUBLIC_URL + '/take'} component={Take} />
      <Route path={process.env.PUBLIC_URL + '/edit'} component={Edit} />
    </BrowserRouter>
  );
}

export default App;


