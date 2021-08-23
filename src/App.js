import { BrowserRouter, Switch, Route } from "react-router-dom"
import NotFound from './pages/NotFound.js'
import About from './pages/About.js'
import Home from './pages/Home.js'
import News from './pages/News.js'
import React from 'react'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news" exact component={News} />
        <Route path="/a-propos" component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
