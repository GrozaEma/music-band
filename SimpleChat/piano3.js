$(document).ready(function(){
    var c = $("#mid-c")[0];
    var cs = $("#mid-c-sharp")[0];
    var d = $("#mid-d")[0];
    var ds = $("#mid-d-sharp")[0];
    var e = $("#mid-e")[0];
    var f = $("#mid-f")[0];
    var fs = $("#mid-f-sharp")[0];
    var g = $("#mid-g")[0];
    var gs = $("#mid-g-sharp")[0];
    var a = $("#mid-a")[0];
    var as = $("#mid-a-sharp")[0];
    var b = $("#mid-b")[0];

    //c.play();
    $("li").click( function(){
        var note = this.dataset.note;
        //alert(note);
        switch(note){
            case "a": a.play();
                break;
            case "b": b.play();
                break;
            case "c": c.play();
                break;
            case "d": d.play();
                break;

            case "e": e.play();
                break;

            case "f": f.play();
                break;

            case "g": g.play();
                break;

            case "as": as.play();
                break;

            case "cs": cs.play();
                break;

            case "ds": ds.play();
                break;

            case "fs": fs.play();
                break;

            case "gs": gs.play();
                break;
        }
    });


    var connection = new WebSocket('ws://127.0.0.1:1337');

    connection.onerror = function (error) {
        // just in there were some problems with conenction...
        console.log("Unable to connect");
    };

    window.onkeydown = function(e) {
        if (e.keyCode === 65) {
            console.log("DO");
            var msg = "a";
            if (!msg) {
                return;
            }
            // send the message as an ordinary text
            connection.send(msg);
        }
        if (e.keyCode === 83) {
            console.log("RE");
            var msg = "s";
            if (!msg) {
                return;
            }
            connection.send(msg);
        }
        if (e.keyCode === 68) {
            console.log("MI");
            var msg = "d";
            if (!msg) {
                return;
            }
            connection.send(msg);
        }
        if (e.keyCode === 70) {
            console.log("FA");
            var msg = "f";
            if (!msg) {
                return;
            }
            connection.send(msg);
        }
        if (e.keyCode === 71) {
            console.log("SOL");
            var msg = "g";
            if (!msg) {
                return;
            }
            connection.send(msg);
        }
        if (e.keyCode === 72) {
            console.log("LA");
            var msg = "h";
            if (!msg) {
                return;
            }
            connection.send(msg);
        }
        if (e.keyCode === 74) {
            console.log("SI");
            var msg = "j";
            if (!msg) {
                return;
            }
            connection.send(msg);
        }

        if (e.keyCode === 87) {
            console.log("DoBemol");
            var msg = "w";
            if (!msg) {
                return;
            }
            connection.send(msg);
        }
        if (e.keyCode === 69) {
            console.log("ReBemol");
            var msg = "e";
            if (!msg) {
                return;
            }
            connection.send(msg);
        }
        if (e.keyCode === 82) {
            console.log("FaBemol");
            var msg = "r";
            if (!msg) {
                return;
            }
            connection.send(msg);
        }
        if (e.keyCode === 84) {
            console.log("SolBemol");
            var msg = "t";
            if (!msg) {
                return;
            }
            connection.send(msg);
        }
        if (e.keyCode === 89) {
            console.log("LaBemol");
            var msg = "y";
            if (!msg) {
                return;
            }
            connection.send(msg);
        }
    };

    connection.onmessage = function (message) {
        if (message.data === "a") {
            c.play();
        }
        if (message.data === "s") {
            d.play();
        }
        if (message.data === "d") {
            e.play();
        }
        if (message.data === "f") {
            f.play();
        }
        if (message.data === "g") {
            g.play();
        }
        if (message.data === "h") {
            a.play();
        }
        if (message.data === "j") {
            b.play();
        }

        //bemoluri
        if (message.data === "w") {
            cs.play();
        }
        if (message.data === "e") {
            ds.play();
        }
        if (message.data === "r") {
            fs.play();
        }
        if (message.data === "t") {
            gs.play();
        }
        if (message.data === "y") {
            as.play();
        }
    }
});
