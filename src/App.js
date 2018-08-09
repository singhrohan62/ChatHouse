import React, { Component } from 'react';
import io from 'socket.io-client'
import './App.css';
import Chatrooms from './Chatrooms';
import {BrowserRouter as Router,Switch, Route, Link,Redirect} from 'react-router-dom';
import Chatroom from './Chatroom'
import bakwas from './bakwas'
import Button from '@material-ui/core/Button';

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
                <Router>
                  <div>
                    <ul>
                          <div className="row">
                        <Link to="/ad"><Chatrooms/></Link>
                       
                          </div>
                           <Link to="/"><Button onClick = {() => this.setState({isChatroomSelected : true})}>Gotp</Button></Link>
                    </ul>
                        <Switch>
                        <Route exact path="/ad" component={Chatrooms} />
                        <Route path="/" component={bakwas}/>
                        </Switch> 
                  </div>
                </Router>

          </div>
      </div>
    )
  }

  rendersChat = () => {
    return (
      <bakwas/>
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

    else {
      return this.rendersChat()
      
  }
    }
}

export default App;
