import React, {Component} from 'react'
import RoomButton from './RoomButton'
import chatrooms from'./config/chatrooms';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Chatrooms extends Component {

	render () {

			return (
					
							chatrooms.map(function (room){
		                  	return(<RoomButton title={room.name} image={room.image}/>)
		                  		 
		                  })
							
					
					
			)
	}
}

export default Chatrooms;