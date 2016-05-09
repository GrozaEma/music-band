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
    var index = clients.push(connection) - 1;

    console.log((new Date()) + ' Connection accepted.');


    // user sent some message
    connection.on('message', function(message) {
        console.log(clients.length);
        if (message.type === 'utf8') { // accept only text
                if (message.utf8Data === "a") {  //do
                    for (var i=0; i < clients.length; i++) {
                        clients[i].sendUTF("a");
                    }
                }
                if (message.utf8Data === "s") {  //re
                    for (var i=0; i < clients.length; i++) {
                        clients[i].sendUTF("s");
                    }
                }
                if (message.utf8Data === "d") {  ////mi
                    for (var i=0; i < clients.length; i++) {
                        clients[i].sendUTF("d");
                    }
                }
                if (message.utf8Data === "f") {  //fa
                    for (var i=0; i < clients.length; i++) {
                        clients[i].sendUTF("f");
                    }
                }
                if (message.utf8Data === "g") {  //sol
                    for (var i=0; i < clients.length; i++) {
                        clients[i].sendUTF("g");
                    }
                }
                if (message.utf8Data === "h") {  //la
                    for (var i=0; i < clients.length; i++) {
                        clients[i].sendUTF("h");
                    }
                }
                if (message.utf8Data === "j") {  //si
                    for (var i=0; i < clients.length; i++) {
                        clients[i].sendUTF("j");
                    }
                }

                //bemoluri
            if (message.utf8Data === "w") {  //doBem
                for (var i=0; i < clients.length; i++) {
                    clients[i].sendUTF("w");
                }
            }
            if (message.utf8Data === "e") {  //reBem
                for (var i=0; i < clients.length; i++) {
                    clients[i].sendUTF("e");
                }
            }
            if (message.utf8Data === "r") {  //faBem
                for (var i=0; i < clients.length; i++) {
                    clients[i].sendUTF("r");
                }
            }
            if (message.utf8Data === "t") {  //solBem
                for (var i=0; i < clients.length; i++) {
                    clients[i].sendUTF("t");
                }
            }
            if (message.utf8Data === "y") {  //laBem
                for (var i=0; i < clients.length; i++) {
                    clients[i].sendUTF("y");
                }
            }
            //}
        }
    });

    // user disconnected
    connection.on('close', function(connection) {
            console.log(new Date() + " Peer " + connection.remoteAddress + " disconnected.");
            clients.splice(index, 1);
    });

});