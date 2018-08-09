const userTemplates = require('../src/config/users')

module.exports = function () {
	
	const clients = new Map()

	function addClient(client) {
		clients.set(client.id, {client})
	}

	function registerClient(client, user) {
		clients.set(client.id, {client, user})
	}

	function removeClient(client) {
		clients.delete(client.id)
	}

	function getAvailableUsers() {
    const usersTaken = new Set(
      Array.from(clients.values())
        .filter(c => c.user)
        .map(c => c.user.name)
    )
    return userTemplates
      .filter(u => !usersTaken.has(u.name))
  }

  function isUserAvailable(uerName) {
  	return getAvailableUsers().some(u => u.name === username)
  }

  function getUserByName(userName) {
    return userTemplates.find(u => u.name === userName)
  }

  function getUserByClientId(clientId) {
    return (clients.get(clientId) || {}).user
  }

  return {
    addClient,
    registerClient,
    removeClient,
    getAvailableUsers,
    isUserAvailable,
    getUserByName,
    getUserByClientId
  }
}