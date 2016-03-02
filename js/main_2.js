

var dataset = 'https://raw.githubusercontent.com/labyer/midterm/master/NYSDestinations_5.geojson';

//intro text
var introText = 'New York offers numerous outdoor attractions at many locations throughout the State. Click through the slides to view the locations of various outdoor activities.';

//equestrian text
var equestrianText = 'These locations feature horseback riding and supply riders with miles of beautiful trails.';

//sighseeing text
var sightseeingText = 'The various sightseeing opportunities are at these locations on the map. These include both historic sites and nature obervations.';

//water activities text
var waterText = 'The mapped locations represent the canoeing, boating, and fishing opportunities.';

//hiking text
var hikingText = 'Anyone looking for hiking opportunities should consider these options.';

//camping & picnics text
var campingText = 'The final category features camping and picnic sites throughout the State.';

//final text
var finalText = 'Here is a breakdown of each category. Feel free to look through the previous pages again, or click on one of the circles to see the name of the attraction.';



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
   fillColor: '#006388',
   weight: 0,
   fillOpacity: 0.75
};

var equestrianMarkers =  {
   radius: 10,
   fillColor: "#a75700",
   weight: 0,
   fillOpacity: 0.75
};

var sightseeingMarkers =  {
   radius: 10,
   fillColor: "#d97100",
   weight: 0,
   fillOpacity: 0.75
};

var waterMarkers =  {
   radius: 10,
   fillColor: "#ff8500",
   weight: 0,
   fillOpacity: 0.75
};

var hikingMarkers =  {
   radius: 10,
   fillColor: "#ffba70",
   weight: 0,
   fillOpacity: 0.75
};

var campingMarkers =  {
   radius: 10,
   fillColor: "#ffd3a4",
   weight: 0,
   fillOpacity: 0.75
};

// var latlng = L.latlng(features.geometry.coordinates);

var setSlide1 = function(dataset){
  document.getElementById('previous-button').className = '';
  document.getElementById('next-button').className = 'button-next-1';
  $('#attraction-feature').text('');
  $('#info').text(introText);
  $('#final-legend').hide();
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
  $('#attraction-feature').text('Horseback Riding');
  $('#info').text(equestrianText);
  $('#final-legend').hide();
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
  $('#attraction-feature').text('Sightseeing');
  $('#info').text(sightseeingText);
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: function(feature, layer){
        return feature.properties.FEATURE == 'NATURE OBSERVATION' ||
               feature.properties.FEATURE == 'HISTORIC SITE' ;
      },
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, sightseeingMarkers);
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
  $('#attraction-feature').text('Water Activities');
  $('#info').text(waterText);
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: function(feature, layer){
        return feature.properties.FEATURE == 'BOATING' ||
               feature.properties.FEATURE == 'CANOEING' ||
               feature.properties.FEATURE == 'FISHING';
      },
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, waterMarkers);
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
  $('#final-legend').hide();
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
  document.getElementById('next-button').className = 'button-next-rest';
  $('#attraction-feature').text('Camping & Picnics');
  $('#info').text(campingText);
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: function(feature, layer){
        return feature.properties.FEATURE == 'CAMPGROUND' ||
               feature.properties.FEATURE == 'PRIMITIVE CAMPSITE' ||
               feature.properties.FEATURE == 'INTERPRETIVE CAMPSITE' ||
               feature.properties.FEATURE == 'PICNIC SITE';
      },
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, campingMarkers);
    },
      onEachFeature: function(feature, layer){
        layer.bindPopup(feature.properties.NAME);
      }
    });
    markers.addTo(map);
  });
  $('#next-button').off();
  $('#next-button').on('click', function(){
    setSlide7(dataset);
  });
  $('#previous-button').off();
  $('#previous-button').on('click', function(){
    setSlide5(dataset);
  });
};

var setSlide7 = function(dataset) {
  document.getElementById('previous-button').className = 'button-previous';
  document.getElementById('next-button').className = '';
  $('#attraction-feature').text('');
  $('#info').text(finalText);
  $('#final-legend').show();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: function(feature, layer){
        return feature.properties.FEATURE == 'EQUESTRIAN' ||
               feature.properties.FEATURE == 'NATURE OBSERVATION' ||
               feature.properties.FEATURE == 'BOATING' ||
               feature.properties.FEATURE == 'HIKING TRAIL' ||
               feature.properties.FEATURE == 'CAMPGROUND' ||
               feature.properties.FEATURE == 'PRIMITIVE CAMPSITE' ||
               feature.properties.FEATURE == 'INTERPRETIVE CAMPSITE' ||
               feature.properties.FEATURE == 'PICNIC SITE' ||
               feature.properties.FEATURE == 'HISTORIC SITE' ||
               feature.properties.FEATURE == 'CANOEING' ||
               feature.properties.FEATURE == 'FISHING';
      },
      pointToLayer: function (feature, latlng) {
        if (feature.properties.FEATURE == 'EQUESTRIAN'){
          return L.circleMarker(latlng, equestrianMarkers);
        }
        if (feature.properties.FEATURE == 'NATURE OBSERVATION' ||
            feature.properties.FEATURE == 'HISTORIC SITE'){
          return L.circleMarker(latlng, sightseeingMarkers);
        }
        if (feature.properties.FEATURE == 'BOATING' ||
            feature.properties.FEATURE == 'CANOEING' ||
            feature.properties.FEATURE == 'FISHING'){
          return L.circleMarker(latlng, waterMarkers);
        }
        if (feature.properties.FEATURE == 'HIKING TRAIL'){
          return L.circleMarker(latlng, hikingMarkers);
        }
        if (feature.properties.FEATURE == 'CAMPGROUND' ||
            feature.properties.FEATURE == 'PRIMITIVE CAMPSITE' ||
            feature.properties.FEATURE == 'INTERPRETIVE CAMPSITE' ||
            feature.properties.FEATURE == 'PICNIC SITE'){
          return L.circleMarker(latlng, campingMarkers);
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
    setSlide6(dataset);
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
var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);
