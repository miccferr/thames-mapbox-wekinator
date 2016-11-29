


mapboxgl.accessToken = 'pk.eyJ1IjoiY2FydG9taWtlIiwiYSI6IjA3ODMzYzc1NDQ5ZmZhMWY1ZjU4NGEwOGUyN2E3OWEzIn0.1AMo07FLn59Mtc3qSNp94g';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9'
});


var ws = new WebSocket('ws://localhost:8081');
      ws.onmessage = function (event) {
        // console.log(JSON.parse(event.data));
        var argsArray = JSON.parse(event.data)
        var mode = argsArray.args[0]
        console.log(mode);
        if (mode == 1){
          map.flyTo({center: [-0.115356, 51.511734], zoom: 11});
        }else{
          map.flyTo({center: [0.216980, 51.479779], zoom: 21});
        }

      };
