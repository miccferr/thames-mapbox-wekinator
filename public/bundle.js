(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){



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

},{}]},{},[1]);
