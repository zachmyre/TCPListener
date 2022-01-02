const net = require('net');
const PORT = 8080;
const HOST = 'localhost';

const client = net.connect(PORT, HOST, () => {
    client.write('Hello from Client: ' + client.address().address);
})