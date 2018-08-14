import React, { Component } from 'react';
import io from 'socket.io-client'
import './App.css';
import Loader from './Loader'
import Fullscreen from './Fullscreen'
import Home from './Home'

import Chatrooms from './config/chatrooms'

class App extends Component {

	componentWillMount() {
		Chatrooms.forEach(c => console.log(c.name))
	}

  render() {

      return ( <div>
      			<Fullscreen background="#eeeeee" opacity={0.8}> 
      					<Home/>
       			</Fullscreen>
            
       </div>
       );
    }
}

export default App;
