import React, { Component } from 'react';
import io from 'socket.io-client'
import './App.css';
import houses from'./config/houses';



class App extends Component {

  constructor() {
    super()

    this.state = {
      endpoint : "http://localhost:3000",
      color : 'white'
    }
  }

  send = (color) => {
      const socket = io(this.state.endpoint)
      //console.log(this.state.color)
      socket.emit('change color',color);
  }

  setColor = (color) => {
    this.setState({color})
    this.send(color);
  }

  render() {

    const socket = io(this.state.endpoint);

    socket.on('change color', (col) => {
      console.log(col);
      document.body.style.backgroundColor = col
      
    })
    return (
      <div className="App">
        
            <button onClick = {() => this.setColor('blue')}>Change to Blue</button>
            <button onClick = {() => this.setColor('red')}>Change to Red</button>

            <p>houses.name</p>
        
      </div>
    );
  }
}

export default App;
