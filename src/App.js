import React, { Component } from 'react';
import io from 'socket.io-client'
import './App.css';
import Loader from './Loader'
import Fullscreen from './Fullscreen'
class App extends Component {


  render() {

      return ( <div><Fullscreen background="#eeeeee" opacity={0.6}> <Loader/>sdfsd </Fullscreen></div>);
    }
}

export default App;
