const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', socket => {
	/*
	socket.on('register', handleRegister)

	socket.on('join', handleJoin)

	socket.on('leave', handleLeave)

	socket.on('message', handleMessage)

	socket.on('chatrooms', handleGetChatrooms)

	socket.on('availableUsers', handleGetAvailableUsers)*/

	socket.on('disconnect', () => {
		console.log('client disconnect ... ', socket.id)
		//handleDisconnect()
	})

	socket.on('change color', (color) => {
		console.log('Color changed to '+ color)
		io.sockets.emit('change color',color)
	})

	socket.on('error', err => {
		console.log('error recieved from '+ socket.id)
		console.log(err)
	})
})

server.listen(3000, err => {
	if(err) throw err
	console.log('listening on port 3000')
})