const net = require('net');
const PORT = 8080;

const server = new net.createServer();

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})

let sockets = [];

server.on('connection', (socket) => {
    console.log('New Connection established.');
    sockets.push(socket);

    socket.write("Welcome to Zachs TCP Listener");

    socket.on('data', (packet) => {
        console.log(`Data received from client: ${packet.toString()}`);
    });

    socket.on('end', () => {
        console.log('Closing connection with client');
    });

    socket.on('error', () => {
        console.log(`ERROR: ${error}`);
    })
})

module.exports = exports.default;

