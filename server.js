const net = require('net')
const colors = require('colors')

server = net.createServer()

server.on('connection', (socket) => {
    const remoteAddress = socket.remoteAddress + ':' + socket.remotePort
    console.log(`Client connected from ${remoteAddress}`.cyan)

    socket.on('data', (data) => {
        console.log(`From ${remoteAddress} - ${data}`.yellow)
        socket.write('Message from server!')
    })

    socket.on('close', () => {
        console.log(`Client disconnected from ${remoteAddress}`.pink)
    })

    socket.on('error', (err) => {
        console.error(`Error on client connection from ${remoteAddress} - ${err}`.red)
    })
})

server.listen(8086, '127.0.0.1', () => {
    console.log('Server is on ...'.green)
})