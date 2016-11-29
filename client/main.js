


mapboxgl.accessToken = 'pk.eyJ1IjoiY2FydG9taWtlIiwiYSI6IjA3ODMzYzc1NDQ5ZmZhMWY1ZjU4NGEwOGUyN2E3OWEzIn0.1AMo07FLn59Mtc3qSNp94g';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9'
});


var ws = new WebSocket('ws://localhost:8081');
      ws.onmessage = function (event) {
        console.log(event);
      };

      
// var oscPort = new osc.WebSocketPort({
//     url: "ws://localhost:8081" // URL to your Web Socket server.
// });
//
// oscPort.open(function () {
//   // send
//   // For most Ports, send() should only be called after the "open" event fires.
//   // oscPort.send({
//   //     address: "/carrier/frequency",
//   //     args: 440
//   // });
//
// });
//
// // listen
// oscPort.on("message", function (oscMsg) {
//     console.log("An OSC message just arrived! client", oscMsg);
// });
