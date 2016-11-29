
var osc = require("osc"),
    http = require("http"),
    server = http.createServer();
    WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ server: server }),
    express = require('express'),
    app = express(),
    path = require("path"),
    WekinatorNode = require('wekinator-node'),
    wn = new WekinatorNode('0.0.0.0',6448);


// serve from static files folder
app.use( express.static(path.join(__dirname, 'public')))
app.get('/', function(req, res){
  res.render('index.html');
});

// wensocket connect to client
wss.on('connection', function connection(ws) {
  console.log("websocket established");

  // connect to wekinator
  wn.connect(function(){
    console.log("wekinator established");
    //if incoming message from client
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });
    // When we recieve a message from Wekinator..
    wn.on("osc", function(a){
  			// log it
  			console.log(a);
        // send it to client
        ws.send(JSON.stringify(a));
  		});
  });
});


// start server
server.on('request', app);
server.listen(8081);
