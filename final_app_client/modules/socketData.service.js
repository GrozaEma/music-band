angular
    .module('SocketData.Service', [])
    .factory('socketDataService', socketDataService);

function socketDataService($q, $rootScope) {
    
    // We return this object to anything injecting our service
    var Service = {};
    
    // Keep all pending requests here until they get responses
    var callbacks = {};
    
    // Create a unique callback ID to map requests to responses
    var currentCallbackId = 0;
    var ws;
    
    Service.init = function() {
        var defer = $q.defer();
        // Create our websocket object with the address to the websocket
        ws = new WebSocket('ws://127.0.0.1:1337');

        ws.onopen = function(){  
            console.log("Socket has been opened!");
            defer.resolve();
        };
        
        ws.onmessage = function(message) {
            listener(JSON.parse(message.data));
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

    function listener(data) {
        var messageObj = data;
        console.log("Received data from websocket: ", messageObj);
        // If an object exists with callback_id in our callbacks object, resolve it
        if (callbacks.hasOwnProperty(messageObj.callback_id)) {
            $rootScope.$apply(callbacks[messageObj.callback_id].cb.resolve(messageObj.data));
            delete callbacks[messageObj.callbackID];
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

    // Define a "getter" for getting customer data
    Service.sendMessage = function(message) {
      var request = {
        data: message
      }
      // Storing in a variable for clarity on what sendRequest returns
      var promise = sendRequest(request); 
      return promise;
    }

    return Service;
}