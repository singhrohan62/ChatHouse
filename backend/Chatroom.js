module.exports = function ({name, image}) {
	
	const members = new Map()

	chatHistory = []

	function broadcastMessage(message) {
		members.forEach(m => m.emit('message',message))
	}

	function addEntry(entry) {
		chatHistory.concat(entry)
	}

	function getChatHistory() {
		chatHistory.splice()
	}

	function addUser(client) {
		members.set(client.id, client)
	}

	function removeUser(client) {
		members.delete(client.id)
	}

	
  function serialize() {
    return {
      name,
      image,
      numMembers: members.size
    }
  }

	return (
			broadcastMessage,
			addEntry,
			addUser,
			removeUser,
			serialize
		)
}