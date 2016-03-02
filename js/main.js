

var dataset = 'https://raw.githubusercontent.com/labyer/midterm/master/NYSDestinations_5.geojson';

//intro text
var introText = 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alinatus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem';

//equestrian text
var equestrianText = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem';

//nature observation text
var natureObservationText = 'Incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';

//boatingText
var boatingText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat';

//campground text
var hikingText = 't dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum. Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam';



var markers;
var coords = [];
var latlng = $.ajax(dataset).done(function(data) {
  var x = JSON.parse(data);
  var y = L.geoJson(x, {
    onEachFeature: function(feature, layer) {
      coords.push(feature.geometry.coordinates);
    }
  });
});

var allMarkers =  {
   radius: 10,
   fillColor: "#064f6b",
   weight: 0,
   fillOpacity: 0.75
};

var equestrianMarkers =  {
   radius: 10,
   fillColor: "#df9e00",
   weight: 0,
   fillOpacity: 0.75
};

var natureObservationMarkers =  {
   radius: 10,
   fillColor: "#040e43",
   weight: 0,
   fillOpacity: 0.75
};

var boatingMarkers =  {
   radius: 10,
   fillColor: "#df7400",
   weight: 0,
   fillOpacity: 0.75
};

var hikingMarkers =  {
   radius: 10,
   fillColor: "#4fbee8",
   weight: 0,
   fillOpacity: 0.75
};

// var latlng = L.latlng(features.geometry.coordinates);

var setSlide1 = function(dataset){
  document.getElementById('previous-button').className = '';
  document.getElementById('next-button').className = 'button-next-1';
  $('#attraction-feature').text('');
  $('#info').text(introText);
  coords = [];
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, allMarkers);
      },
      onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.NAME);
      }
    });
    markers.addTo(map);
  });
  $('#next-button').off();
  $('#next-button').on('click', function(){
    setSlide2(dataset);
  });
};


var setSlide2 = function(dataset) {
  document.getElementById('previous-button').className = 'button-previous';
  document.getElementById('next-button').className = 'button-next-rest';
  $('#attraction-feature').text('Equestrian');
  $('#info').text(equestrianText);
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: function(feature, layer){
        return feature.properties.FEATURE == 'EQUESTRIAN';
      },
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, equestrianMarkers);
    },
      onEachFeature: function(feature, layer){
        layer.bindPopup(feature.properties.NAME);
      }
    });
    markers.addTo(map);
  });
  $('#next-button').off();
  $('#next-button').on('click', function(){
    setSlide3(dataset);
  });
  $('#previous-button').off();
  $('#previous-button').on('click', function(){
    setSlide1(dataset);
  });
};

var setSlide3 = function(dataset) {
  document.getElementById('previous-button').className = 'button-previous';
  document.getElementById('next-button').className = 'button-next-rest';
  $('#attraction-feature').text('Nature Observation');
  $('#info').text(natureObservationText);
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: function(feature, layer){
        return feature.properties.FEATURE == 'NATURE OBSERVATION';
      },
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, natureObservationMarkers);
    },
      onEachFeature: function(feature, layer){
        layer.bindPopup(feature.properties.NAME);
      }
    });
    markers.addTo(map);
  });
  $('#next-button').off();
  $('#next-button').on('click', function(){
    setSlide4(dataset);
  });
  $('#previous-button').off();
  $('#previous-button').on('click', function(){
    setSlide2(dataset);
  });
};

var setSlide4 = function(dataset) {
  document.getElementById('previous-button').className = 'button-previous';
  document.getElementById('next-button').className = 'button-next-rest';
  $('#attraction-feature').text('Boating');
  $('#info').text(boatingText);
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: function(feature, layer){
        return feature.properties.FEATURE == 'BOATING';
      },
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, boatingMarkers);
    },
      onEachFeature: function(feature, layer){
        layer.bindPopup(feature.properties.NAME);
      }
    });
    markers.addTo(map);
  });
  $('#next-button').off();
  $('#next-button').on('click', function(){
    setSlide5(dataset);
  });
  $('#previous-button').off();
  $('#previous-button').on('click', function(){
    setSlide3(dataset);
  });
};

var setSlide5 = function(dataset) {
  document.getElementById('previous-button').className = 'button-previous';
  document.getElementById('next-button').className = 'button-next-rest';
  $('#attraction-feature').text('Hiking Trails');
  $('#info').text(hikingText);
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: function(feature, layer){
        return feature.properties.FEATURE == 'HIKING TRAIL';
      },
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, hikingMarkers);
    },
      onEachFeature: function(feature, layer){
        layer.bindPopup(feature.properties.NAME);
      }
    });
    markers.addTo(map);
  });
  $('#next-button').off();
  $('#next-button').on('click', function(){
    setSlide6(dataset);
  });
  $('#previous-button').off();
  $('#previous-button').on('click', function(){
    setSlide4(dataset);
  });
};

var setSlide6 = function(dataset) {
  document.getElementById('previous-button').className = 'button-previous';
  document.getElementById('next-button').className = '';
  $('#attraction-feature').text('');
  $('#info').text(hikingText);
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: function(feature, layer){
        return feature.properties.FEATURE == 'EQUESTRIAN' ||
               feature.properties.FEATURE == 'NATURE OBSERVATION' ||
               feature.properties.FEATURE == 'BOATING' ||
               feature.properties.FEATURE == 'HIKING TRAIL';
      },
      pointToLayer: function (feature, latlng) {
        if (feature.properties.FEATURE == 'EQUESTRIAN'){
          return L.circleMarker(latlng, equestrianMarkers);
        }
        if (feature.properties.FEATURE == 'NATURE OBSERVATION'){
          return L.circleMarker(latlng, natureObservationMarkers);
        }
        if (feature.properties.FEATURE == 'BOATING'){
          return L.circleMarker(latlng, boatingMarkers);
        }
        if (feature.properties.FEATURE == 'HIKING TRAIL'){
          return L.circleMarker(latlng, hikingMarkers);
        }
    },
      onEachFeature: function(feature, layer){
        layer.bindPopup(feature.properties.NAME);
      }
    });
    markers.addTo(map);
  });
  $('#previous-button').off();
  $('#previous-button').on('click', function(){
    setSlide5(dataset);
  });
};

$(document).ready(function() {
  setSlide1(dataset);
});




/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [43.061485, -75.975287],
  zoom: 7
});
// var CartoDB_DarkMatterNoLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
// 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
// 	subdomains: 'abcd',
// 	maxZoom: 19
// }).addTo(map);
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
