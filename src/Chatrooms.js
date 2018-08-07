import React, {Component} from 'react'
import Chatroom from './Chatroom'
import chatrooms from'./config/chatrooms';
import {BrowserRouter,Route, Link } from 'react-router-dom';

class Chatrooms extends Component {
	render () {

			return (
			<div>
							chatrooms.map(function (room){
		                  	return(
		                  			<Chatroom title={room.name} image={room.image}/>
		                  		) 
		                  })
					
			</div>
			)
	}
}

export default Chatrooms;