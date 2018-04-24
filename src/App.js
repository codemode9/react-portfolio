import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
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
      <About />
      <Footer />
      </div>
    );
  }
}

export default App;