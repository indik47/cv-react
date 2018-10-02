import React, { Component } from 'react';
import styles from './App.css';
import Navigation from "./containers/Navigation";
import Router from './containers/Router';



class App extends Component {
  render() {
    return (
      <div className={styles.App}>
          <Navigation/>
          <Router/>
      </div>
    );
  }
}

export default App;
