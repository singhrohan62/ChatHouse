import React, { Component } from 'react';
import io from 'socket.io-client'
import './App.css';
import ChatroomCard from './ChatroomCard';
import Card from '@material-ui/core/Card';
import chatrooms from'./config/chatrooms';



class App extends Component {

 

  constructor() {
    super()

    this.state = {
      endpoint : "http://localhost:3000",
      color : 'white',
      loggedIn : false
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
      <div>    
          <div className="App">            
                <button onClick = {() => this.setColor('blue')}>Change to Blue</button>
                <button onClick = {() => this.setColor('red')}>Change to Red</button>
                
                <div className="row">
                {
                  chatrooms.map(function (room){
                  return <ChatroomCard title={room.name} image={room.image}/>
                })  
                }
                </div>

          </div>
      </div>
    );
  }
}

export default App;
