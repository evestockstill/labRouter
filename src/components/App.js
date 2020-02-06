import React from 'react';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './home/Home';
import Details from './details/Details';
import Characters from './character/Characters';

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Characters} />
        <Route path='/details/:id' component={Details} />
      </Switch>
      <Footer />
    </Router>
  );
}
