import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Containment from './components/Containment';
import Side from './components/Side';
import './App.css';
class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
      <Nav />
      {/* <Router>
        <Switch>
        <Route exact path='/' component={Landing} />
        </Switch>
      </Router> */}
      <Containment />
      <Footer />
      </div>
    );
  }
}

export default App;