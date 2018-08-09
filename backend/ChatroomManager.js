 Chatroom = require('./Chatroom');
 ChatroomTemplates = require('../src/config/chatrooms');

module.exports = function () {
	const chatrooms = new Map(
		ChatroomTemplates.map(c => [c.name, Chatroom(c)])
		)

	function removeClient(client) {
		chatrooms.forEach(c => c.removeUser(client))
	}

	function getChatroomsByName(chatroomName) {
		chatrooms.get(chatroomName)
	}

	function serializeChatrooms() {
		return Array.from(chatrooms.values()).map(c => c.serialize())
	}

	return {
		removeClient,
		getChatroomsByName,
		serializeChatrooms
	}
}