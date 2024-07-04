import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';

import Greet from './components/Greet.js'
import Welcome from './components/Welcome.js'
import Message from './components/Message.js';

import Signin from './components/authentication/Signin.js';
import Signup from './components/authentication/Signup.js';

import Navbar from './components/navbar/Navbar.js';
import Profile from './components/profile/Profile.js';

class App extends Component {
  // constructor(props) { 
  //   super(props);
  //   this.state = {
  //     apiResponse: ""
  //   }
  // }

  // callAPI() {
  //   fetch("http://localhost:3000/")
  //       .then(res => res.text())
  //       .then(res => this.setState({ apiResponse: res }));
  // }

  // componentWillMount() {
  //   this.callAPI();
  // }

  render() {
    return (
      <div className="App">
        {/* <p className="App-intro">{this.state.apiResponse}</p> */}
        {/* <Signin /> */}
        {/* <Signup /> */}
        {/* <Navbar /> */}
        <Profile />

      </div>
    );
  }
}



export default App;
