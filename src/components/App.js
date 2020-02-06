import React from 'react';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Details from './details/Details';
import DisplayCharacters from './DisplayCharacters'

export default function App() {

  return (
    <Router>
      <Nav />
      <DisplayCharacters
      {/* <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/details/:name' component={Details} />
      </Switch> */}
      <Footer />
    </Router>
  );
}
