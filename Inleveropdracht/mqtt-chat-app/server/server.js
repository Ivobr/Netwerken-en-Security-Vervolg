const mosca = require('mosca');

const settings = {
    port: 1883,
    http: {
        port: 9001,
        bundle: true,
        static:'./'
    }
}; 

const server = new mosca.Server(settings);

server.on('ready', () => {
    console.log('server running');
});

server.on('clientConnected', (client) => {
    console.log('Client coneccted:', client.id);
});

server.on('published', (packet, client) => {
    console.log('Published:', packet.payload.toString());
});