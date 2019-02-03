import React, { Component } from 'react';
import './materialize.css';
//import url('https://fonts.googleapis.com/icon?family=Material+Icons');
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <head>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"/>
        </head>
        <body>
          <Navbar />
        </body>
      </React.Fragment>
    );
  }
}

export default App;
