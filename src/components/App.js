import React from 'react';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Characters from './character/Characters';
import Details from './details/Details';

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Characters} />
        <Route path='/character/:id' component={Details} />
      </Switch>
      <Footer />
    </Router>
  );
}
