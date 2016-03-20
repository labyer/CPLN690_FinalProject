
//SET DATASET
//NYS outdoor activities
var dataset = 'https://raw.githubusercontent.com/labyer/midterm/master/NYSDestinations_5.geojson';

//INFORMATIONAL TEXT
//slide 1 - intro text
var introText = 'New York offers numerous outdoor attractions at many locations throughout the State. Click through the slides to view the locations of various outdoor activities.';
//slide 2 - horseback riding text
var equestrianText = 'These locations feature horseback riding and supply riders with miles of beautiful trails.';
//slide 3 - sighseeing text
var sightseeingText = 'The various sightseeing opportunities are at these locations on the map. These include both historic sites and nature obervations.';
//slide 4 - water activities text
var waterText = 'The mapped locations represent the canoeing, boating, and fishing opportunities.';
//slide 5 - hiking text
var hikingText = 'Anyone looking for hiking opportunities should consider these options.';
//slide 6 - camping & picnics text
var campingText = 'The final category features camping and picnic sites throughout the State.';
//slide 7 - final text
var finalText = 'Here is a breakdown of each category. Feel free to look through the previous pages again, or click on one of the circles to see the name of the attraction.';


//MARKER STYLES
//slide 1 - all markers
var allMarkers =  {
   radius: 10,
   fillColor: '#006388',
   weight: 0,
   fillOpacity: 0.75
};
//slide 2 - horseback riding markers
var equestrianMarkers =  {
   radius: 10,
   fillColor: "#a75700",
   weight: 0,
   fillOpacity: 0.75
};
//slide 3 - sightseeing markers
var sightseeingMarkers =  {
   radius: 10,
   fillColor: "#d97100",
   weight: 0,
   fillOpacity: 0.75
};
//slide 4 - water activities markers
var waterMarkers =  {
   radius: 10,
   fillColor: "#ff8500",
   weight: 0,
   fillOpacity: 0.75
};
//slide 5 - hiking markers
var hikingMarkers =  {
   radius: 10,
   fillColor: "#ffba70",
   weight: 0,
   fillOpacity: 0.75
};
//slide 6 - camping markers
var campingMarkers =  {
   radius: 10,
   fillColor: "#ffd3a4",
   weight: 0,
   fillOpacity: 0.75
};
//slide 7 is a combo of the styles make for slides 2 - 6


//FILTER FUNCTIONS
//slide 2 filters - horseback riding
var equestrianFilter = function(feature, layer){
  return feature.properties.FEATURE == 'EQUESTRIAN';
};
//slide 3 filters - sightseeing
var sightseeingFilter = function(feature, layer){
  return feature.properties.FEATURE == 'NATURE OBSERVATION' ||
         feature.properties.FEATURE == 'HISTORIC SITE' ;
};
//slide 4 filter - water activities
var waterFilter = function(feature, layer){
  return feature.properties.FEATURE == 'CANOEING' ||
         feature.properties.FEATURE == 'BOATING' ||
         feature.properties.FEATURE == 'FISHING';
};
//slide 5 filter - hiking trails
var hikingFilter = function(feature, layer){
  return feature.properties.FEATURE == 'HIKING TRAIL';
};
//slide 6 filter - Camping
var campingFilter = function(feature, layer){
  return feature.properties.FEATURE == 'CAMPGROUND' ||
         feature.properties.FEATURE == 'PRIMITIVE CAMPSITE' ||
         feature.properties.FEATURE == 'INTERPRETIVE CAMPSITE' ||
         feature.properties.FEATURE == 'PICNIC SITE';
};
//slide 7 filter - all
var finalFilter = function(feature, layer){
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
};


//POINT TO lAYER FUNCTIONS
//slide 1 filter - intro
var pointToLayer_all = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//slide 2 filter - horseback riding
var pointToLayer_equestrian = function (feature, latlng) {
  return L.circleMarker(latlng, equestrianMarkers);
};
//slide 3 filter - sightseeing
var pointToLayer_sightseeing = function (feature, latlng) {
  return L.circleMarker(latlng, sightseeingMarkers);
};
//slide 4 filter - water activities
var pointToLayer_water = function (feature, latlng) {
  return L.circleMarker(latlng, waterMarkers);
};
//slide 5 filter - hiking
var pointToLayer_hiking = function (feature, latlng) {
  return L.circleMarker(latlng, hikingMarkers);
};
//slide 6 filter - Camping
var pointToLayer_camping = function (feature, latlng) {
  return L.circleMarker(latlng, campingMarkers);
};

var pointToLayer_compare = function (feature, latlng) {
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
};

//ON EACH FEATURE FUNCTION
var onEachFeature_bindPopup = function(feature, layer) {
  layer.bindPopup(feature.properties.NAME);
};


//FUNCTIONS TO CREATE SLIDES
//make global variable to store markers
var markers;
// slide 1 - intro
var setSlide1 = function(dataset){
  document.getElementById('previous-button').className = '';
  // $('#previous-button').className = '';
  // if I replace document.getElementById with the aobve line, the previous button does not disappear after clicking the next button and then going back to this slide
  document.getElementById('next-button').className = 'button-next';
  // $('#next-button').className='button-next';
  // able to take the above line out completely as long as I leave the exact same line of code in the slide 6 function
  $('#attraction-feature').text('');
  $('#info').text(introText);
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      pointToLayer: pointToLayer_all,
      onEachFeature: onEachFeature_bindPopup
    });
    markers.addTo(map);
  });
  $('#next-button').off();
  $('#next-button').on('click', function(){
    setSlide2(dataset);
    map.fitBounds(this.getBounds());
  });
};
//slide 2 - horseback riding
var setSlide2 = function(dataset) {
  document.getElementById('previous-button').className = 'button-previous';
  // $('#previous-button').className = 'button-previous';
  // if I replace document.getElementById with the aobve line, the previous button does not show up at all
  //document.getElementById('next-button').className = 'button-next';
  // able to take the above line out completely as long as I leave the exact same line of code in the slide 6 function
  $('#attraction-feature').text('Horseback Riding');
  $('#info').text(equestrianText);
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: equestrianFilter,
      pointToLayer: pointToLayer_equestrian,
      onEachFeature: onEachFeature_bindPopup
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
//slide 3 - sightseeing
var setSlide3 = function(dataset) {
  document.getElementById('previous-button').className = 'button-previous';
  // $('#previous-button').className = 'button-previous';
  // if I replace document.getElementById with the aobve line, the previous button does not show up at all
  //document.getElementById('next-button').className = 'button-next';
  // able to take the above line out completely as long as I leave the exact same line of code in the setSlide6 function
  $('#attraction-feature').text('Sightseeing');
  $('#info').text(sightseeingText);
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: sightseeingFilter,
      pointToLayer: pointToLayer_sightseeing,
      onEachFeature: onEachFeature_bindPopup
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
//slide 4 - water activities
var setSlide4 = function(dataset) {
  document.getElementById('previous-button').className = 'button-previous';
  // $('#previous-button').className = 'button-previous';
  // if I replace document.getElementById with the aobve line, the previous button does not show up at all
  //document.getElementById('next-button').className = 'button-next';
  // able to take the above line out completely as long as I leave the exact same line of code in the slide 6 function
  $('#attraction-feature').text('Water Activities');
  $('#info').text(waterText);
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: waterFilter,
      pointToLayer: pointToLayer_water,
      onEachFeature: onEachFeature_bindPopup
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
//slide 5 - hiking trails
var setSlide5 = function(dataset) {
  document.getElementById('previous-button').className = 'button-previous';
  // $('#previous-button').className = 'button-previous';
  // if I replace document.getElementById with the aobve line, the previous button does not show up at all
  //document.getElementById('next-button').className = 'button-next';
  // able to take the above line out completely as long as I leave the exact same line of code in the slide 6 function
  $('#attraction-feature').text('Hiking Trails');
  $('#info').text(hikingText);
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: hikingFilter,
      pointToLayer: pointToLayer_hiking,
      onEachFeature: onEachFeature_bindPopup
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
//slide 6 - camping & picnics
var setSlide6 = function(dataset) {
  document.getElementById('previous-button').className = 'button-previous';
  // $('#previous-button').className = 'button-previous';
  // if I replace document.getElementById with the aobve line, the previous button does not show up at all
  document.getElementById('next-button').className = 'button-next';
  //if I take away either the document.getElementById version then the next button doesnt show up anymore on any of the slide after getting to the final slide and pressing the previous button to backtrack through the slides
  // $('#next-button').className = 'button-next';
  // the $('#next-button') version on the line above does not sufficiently replace document.getElementById version, the same thing happens and the next button wont show up after click through the entire slideshow
  $('#attraction-feature').text('Camping & Picnics');
  $('#info').text(campingText);
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: campingFilter,
      pointToLayer: pointToLayer_camping,
      onEachFeature: onEachFeature_bindPopup
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
//slide 7 - final comparison slide
var setSlide7 = function(dataset) {
  document.getElementById('previous-button').className = 'button-previous';
  //$('#previous-button').className = 'button-previous';
  // if I replace document.getElementById with the aobve line, the previous button does not show up at all
  document.getElementById('next-button').className = '';
  //  $('#next-button').className = '';
  // if I use the above line for the next button instead of document.getElementById, the next button does not disappear on the final slide
  $('#attraction-feature').text('');
  $('#info').text(finalText);
  $('#final-legend').show();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: finalFilter,
      pointToLayer: pointToLayer_compare,
      onEachFeature: onEachFeature_bindPopup
    });
    markers.addTo(map);
  });
  $('#previous-button').off();
  $('#previous-button').on('click', function(){
    setSlide6(dataset);
  });
};


//RUN IT!
$(document).ready(function() {
  setSlide1(dataset);
});




//make map
var map = L.map('map', {
  center: [43.061485, -75.975287],
  zoom: 7
});
var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);
