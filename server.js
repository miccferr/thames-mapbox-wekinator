
var osc = require("osc"),
    http = require("http"),
    WebSocket = require("ws"),
    express = require('express'),
    app = express(),
    path = require("path");



server = app.listen(8081);

app.use( express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
  res.render('index.html');
});

// Listen for Web Socket requests.
var wss = new WebSocket.Server({
    server: server
});

// Listen for Web Socket connections.
wss.on("connection", function (socket) {

  console.log("connection established!");

    var socketPort = new osc.WebSocketPort({
        socket: socket
    });

    socketPort.on("message", function (oscMsg) {
        console.log("An OSC Message was received!", oscMsg);
    });

    socketPort.send({
        address: "/carrier/frequency",
        args: "sadasdasdas"
    });
});
