import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return(
      <header>
        <nav style={{ marginBottom:20 }}>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo"><i className="material-icons">insert_emoticon</i>Matcha</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/logout">Logout</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li><a href="/logout">Logout</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </header>
    );
  }
}

export default Navbar;
