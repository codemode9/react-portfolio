import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
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
      <HashRouter>
        <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Containment} />
        <Route exact path={process.env.PUBLIC_URL + '/Portfolio'} component={Containmenttwo} />
        <Route exact path={process.env.PUBLIC_URL + '/Contact'} component={Containmentthree} />
        </Switch>
      </HashRouter>
      <Footer />
      </div>
    );
  }
}

export default App;