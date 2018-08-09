import React, {Component} from 'react'
import RoomButton from './RoomButton'
import chatrooms from'./config/chatrooms';


class Chatrooms extends Component {

	render () {

			return (
							chatrooms.map(function (room){
		                  	return( <RoomButton title={room.name} image={room.image}/>)
		                  		 
		                  })
							
			)
	}
}

export default Chatrooms;