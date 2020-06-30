import React, { Component } from 'react';
import Blog from './Component/Layout/Blog/Blog'
import './App.css';
import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

class App extends Component {
  render() {
    return <Blog />
  }
}

export default App;
