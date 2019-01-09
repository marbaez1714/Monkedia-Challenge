import React, { Component } from 'react';
import Header from './Sections/header'
import Landing from './Sections/landing'
import Store from './Sections/store'
import AboutUs from './Sections/aboutUs'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <Store />
      </div>
    );
  }
}

export default App;
