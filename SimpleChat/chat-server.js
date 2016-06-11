//http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
"use strict";
process.title = 'music-band';

// Port where we'll run the websocket server
var webSocketsServerPort = 1337;

// websocket and http servers
var webSocketServer = require('websocket').server;
var http = require('http');

/**
 * Global variables
 */

// list of currently connected clients (users)
var clients = [ ];
var connectedUsers = [];

/**
 * Helper function for escaping input strings
 */
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Array with some colors
var colors = [ 'red', 'green', 'blue', 'magenta', 'purple', 'plum', 'orange' ];
// ... in random order
colors.sort(function(a,b) { return Math.random() > 0.5; } );

/**
 * HTTP server
 */
var server = http.createServer(function(request, response) {
    // Not important for us. We're writing WebSocket server, not HTTP server
});
server.listen(webSocketsServerPort, function() {
    console.log((new Date()) + " Server is listening on port " + webSocketsServerPort);
});

/**
 * WebSocket server
 */
var wsServer = new webSocketServer({
    // WebSocket server is tied to a HTTP server. WebSocket request is just
    // an enhanced HTTP request.
    httpServer: server
});

// This callback function is called every time someone
// tries to connect to the WebSocket server
wsServer.on('request', function(request) {
    console.log((new Date()) + ' Connection from origin ' + request.origin + '.');
    var connection = request.accept(null, request.origin);
    console.log(connection.remoteAddress);
    var index = clients.push(connection) - 1;

    sendAlreadyConnectedUsers(connection);

    console.log((new Date()) + ' Connection accepted.');

    // user sent some message
    connection.on('message', listener);

    // user disconnected
    connection.on('close', function(connection) {
        console.log(new Date() + " Peer " + connection.remoteAddress + " disconnected.");
        clients.splice(index, 1);
    });
});

function listener(request) {

    if (request.type === 'utf8') { // accept only text
        var message = JSON.parse(request.utf8Data);
        console.log(message);
        console.log('typeof: ', typeof message.data);
        if (typeof message.data === 'object' && message.data.user) {
            console.log('user connected');
            connectedUsers.push(message.data.user);
        }
        sendMessageToAll(JSON.stringify(message));
    }
}

function sendMessageToAll(message) {
    console.log('Clients:', clients.length);
    for (var i = 0; i < clients.length; i++) {
        clients[i].sendUTF(message);
    }
}

function sendAlreadyConnectedUsers(client) {
    console.log('sendAlreadyConnectedUsers ', connectedUsers, client.remoteAddress);
    client.sendUTF(JSON.stringify({
        connectedUsers: connectedUsers
    }));
}







