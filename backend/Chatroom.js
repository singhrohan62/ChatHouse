module.exports = function ({name, image}) {
	
	const members = new Map()
	let chatHistory =  []

	function broadcastMessage(message) {
		members.forEach(m => m.emit('message',message))
		//emitting messages to all users
	}

	function addEntry(entry) {
		chatHistory = chatHistory.concat(entry)
	}

	function getChatHistory() {
		return chatHistory.splice()
	}

	function addUser() {
		 members.set(socket.id, client)
	}

	function removeUser() {
		members.delete(socket.id)
	}

	function serialize() {
		return {
			name,
			image,
			numMembers: members.size
		}
	}

	return {
		broadcastMessage,
		addEntry,
		getChatHistory,
		addUser,
		removeUser,
		serialize
	}

}