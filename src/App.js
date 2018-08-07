import React, { Component } from 'react';
import io from 'socket.io-client'
import './App.css';
import Chatrooms from './Chatrooms';

class App extends Component {

 

  constructor() {
    super()

    this.state = {
      endpoint : "http://localhost:3000",
      color : 'white',
      isChatroomSelected : false,
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

  rendersChatroom  = () => {
     return (
      <div>    
          <div className="App">            
                <button onClick = {() => this.setColor('blue')}>Change to Blue</button>
                <button onClick = {() => this.setColor('red')}>Change to Red</button>
                
                <div className="row">
                {
                  <Chatrooms/>
                }
                </div>

          </div>
      </div>
    )
  }

  render() {

    const socket = io(this.state.endpoint);

    socket.on('change color', (col) => {
      console.log(col);
      document.body.style.backgroundColor = col
    })

    if(!this.state.isChatroomSelected)
    {
      return this.rendersChatroom()
    }
      
  }
}

export default App;
