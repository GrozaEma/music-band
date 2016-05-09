$(function () {
    "use strict";
    var moduleName = 'howler';
    // for better performance - to avoid searching in DOM
    //var content = $('#content');
    var input = $('#input');
    var status = $('#status');

    // if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    // if browser doesn't support WebSocket, just show some notification and exit
    if (!window.WebSocket) {
        content.html($('<p>', { text: 'Sorry, but your browser doesn\'t '
        + 'support WebSockets.'} ));
        input.hide();
        $('span').hide();
        return;
    }

    // open connection
    var connection = new WebSocket('ws://127.0.0.1:1337');

    connection.onopen = function () {
        // first we want users to enter their names
        input.removeAttr('disabled');
        status.text('Choose name:');
    };

    connection.onerror = function (error) {
        // just in there were some problems with conenction...
    };

    connection.onmessage = function (message) {
        if (message.data === "d") {
            console.log(message.data);
            require([moduleName], function () {
                var doSound = new Howl({
                    urls: ['do.wav']
                }).play();
            });
        }
    };

    window.onkeydown = function(e) {
        console.log("ON KEY DOWN");
        if (e.keyCode === 68) {
            console.log("DD");
            var msg = "d";
            if (!msg) {
                return;
            }
            // send the message as an ordinary text
            connection.send(msg);
        }
    };
});