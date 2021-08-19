import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css'
import NotFound from './pages/NotFound.js'
import Home from './pages/Home.js'
import About from './pages/About.js'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/a-propos" component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
