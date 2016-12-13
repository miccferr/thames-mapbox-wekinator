(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){



mapboxgl.accessToken = 'pk.eyJ1IjoiY2FydG9taWtlIiwiYSI6IjA3ODMzYzc1NDQ5ZmZhMWY1ZjU4NGEwOGUyN2E3OWEzIn0.1AMo07FLn59Mtc3qSNp94g';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/cartomike/cim4zpta4012pccm32m19b1fb'
});


var framesPerSecond = 15;
var initialOpacity = 1
var opacity = initialOpacity;
var initialRadius = 8;
var radius = initialRadius;
var maxRadius = 18;


// create the popup
var popup = new mapboxgl.Popup({offset:[0, -30]})
    .setText('Construction on the Washington Monument began in 1848.');





map.on('load', function () {

    // Add a source and layer displaying a point which will be animated in a circle.
    map.addSource('point', {
        "type": "geojson",
        "data":     {
              "type": "FeatureCollection",
              "features": [
                {
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -0.115356, 51.511734
                    ]
                  },
                  "type": "Feature",
                  "properties": {
                    "latitude": 28.0,
                    "country": "Algeria",
                    "personel": "Weidong ?",
                    "count": 1,
                    "longitude": 3.0
                  }
                },
                {
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                    0.216980, 51.479779
                    ]
                  },
                  "type": "Feature",
                  "properties": {
                    "latitude": -34.0,
                    "country": "Argentina",
                    "personel": "Simone ?,Amy Donovan",
                    "count": 2,
                    "longitude": -64.0
                  }
                },
                {
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                    -0.309750,51.475773
                    ]
                  },
                  "type": "Feature",
                  "properties": {
                    "latitude": -34.0,
                    "country": "Argentina",
                    "personel": "Simone ?,Amy Donovan",
                    "count": 2,
                    "longitude": -64.0
                  }
                }]
              }

    });

    map.addLayer({
        "id": "point",
        "source": "point",
        "type": "circle",
        "paint": {
            "circle-radius": initialRadius,
            "circle-radius-transition": {duration: 0},
            "circle-opacity-transition": {duration: 0},
            "circle-color": "#007cbf"
        }
    });

    map.addLayer({
        "id": "point1",
        "source": "point",
        "type": "circle",
        "paint": {
            "circle-radius": initialRadius,
            "circle-color": "#007cbf"
        }
    });


    function animateMarker(timestamp) {
        setTimeout(function(){
            requestAnimationFrame(animateMarker);

            radius += (maxRadius - radius) / framesPerSecond;
            opacity -= ( .9 / framesPerSecond );

            map.setPaintProperty('point', 'circle-radius', radius);
            map.setPaintProperty('point', 'circle-opacity', opacity);

            if (opacity <= 0) {
                radius = initialRadius;
                opacity = initialOpacity;
            }

        }, 1000 / framesPerSecond);

    }

    // Start the animation.
    animateMarker(0);
});



var ws = new WebSocket('ws://localhost:8081');
ws.onmessage = function (event) {
  // console.log(JSON.parse(event.data));
  var argsArray = JSON.parse(event.data)
  var mode = argsArray.args[0]
  console.log(mode);
  if (mode == 1){
    map.flyTo({center: [0.216980, 51.479779], zoom: 15, pitch: 60, bearing: -60});
    // map.flyTo({center: [0.216980, 51.479779], zoom: 20});
    var popup = new mapboxgl.Popup({offset:[0, -30]})
        .setText('Construction on the Washington Monument began in 1848.')
        .setLngLat([0.216980, 51.479779]);

  }else if(mode == 2) {
    map.flyTo({center: [-0.309750,51.475773], zoom: 15, pitch: 60, bearing: -60});
    // create the popup
    var popup = new mapboxgl.Popup({offset:[0, -30]})
        .setText('Construction on the Washington Monument began in 1848.')
        .setLngLat([-0.309750,51.475773]);
    // create DOM element for the marker
    // var el = document.createElement('div');
    // el.id = 'marker';
    // create the marker
    // new mapboxgl.Marker(el, {offset:[-25, -25]})
    //     .setLngLat([-0.309750,51.475773])
    //     .setPopup(popup) // sets a popup on this marker
    //     .addTo(map);

    // map.setPopup('point',popup)
    // .addTo(map);
  }else {
    // map.flyTo({center: [-0.115356, 51.511734], zoom: 11});
    map.flyTo({center: [-0.115356, 51.511734], zoom: 11, pitch: 0, bearing: 0});

  }

};

},{}]},{},[1]);
