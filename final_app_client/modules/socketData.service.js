angular
    .module('SocketData.Service', [])
    .factory('socketDataService', socketDataService);

function socketDataService($q, $rootScope, userService) {
    var self = this;

    // We return this object to anything injecting our service
    var Service = {
        listener: defaultListener
    };
    
    // Keep all pending requests here until they get responses
    var callbacks = {};
    
    // Create a unique callback ID to map requests to responses
    var currentCallbackId = 0;
    var ws;
    
    Service.init = function() {
        var defer = $q.defer();
        // Create our websocket object with the address to the websocket
        // ws = new WebSocket('ws://127.0.0.1:1337');
        ws = new WebSocket('ws://192.168.0.14:1337');
        // ws = new WebSocket('ws://192.168.2.6:1337');

        ws.onopen = function(){  
            console.log("Socket has been opened!");
            defer.resolve();
        };
        
        ws.onmessage = function(message) {
            // listener(JSON.parse(message.data));
            console.log('before parse', message);
            Service.listener(JSON.parse(message.data));
        };
        return defer.promise;
    };
    
    function sendRequest(request) {
        var defer = $q.defer();
        var callbackId = getCallbackId();
        
        callbacks[callbackId] = {
            time: new Date(),
            cb: defer
        };
        request.callback_id = callbackId;
        
        console.log('Sending request', request);
        ws.send(JSON.stringify(request));
        
        return defer.promise;
    }

    function sendData(request) {
        console.log('Sending data', request);
        ws.send(JSON.stringify(request));
    }

    function defaultListener(message) {
        console.log("DEFAULT  Received data from websocket: ", message);

        if (message.connectedUsers) {
            console.log('connectedUsers: ', message.connectedUsers);
            userService.users.concat(message.connectedUsers);
            $rootScope.$apply();
        }
    }

    // This creates a new callback ID for a request
    function getCallbackId() {
        currentCallbackId += 1;
        if (currentCallbackId > 10000) {
            currentCallbackId = 0;
        }
        return currentCallbackId;
    }

    Service.sendMessage = function(message, type) {
        var toSend = {};
        toSend[type] = message;
        return sendData(toSend);
    }

    return Service;
}