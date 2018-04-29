import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Containment from './components/Containment';
import Containmenttwo from "./components/Containmenttwo";
import Containmentthree from "./components/Containmentthree";
import Side from './components/Side';
import Contact from './components/Contact';
import './App.css';
class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
      <Nav />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route exact path='/' component={Containment} />
        <Route exact path='/Portfolio' component={Containmenttwo} />
        <Route exact path='/Contact' component={Containmentthree} />
        </Switch>
      </Router>
      <Footer />
      </div>
    );
  }
}

export default App;