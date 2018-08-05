const Chatroom = require('./Chatroom')
const ChatroomTemplates = require('../config/chatrooms')

module.exports = function () {
	// Mapping the chatrooms

	const Chatrooms = new Map(
		ChatroomTemplates.map(c => [c.name, Chatroom(c)])
		)

	function removeClient(client) {
		Chatrooms.forEach(c => c.removeUser(client))
	}

	function getChatroomByName(chatroomName) {
	    return Chatrooms.get(chatroomName)
	}

	function serializeChatrooms() {
	    return Array.from(Chatrooms.values()).map(c => c.serialize())
	}

	return {
    	removeClient,
    	getChatroomByName,
    	serializeChatrooms
  	}
}