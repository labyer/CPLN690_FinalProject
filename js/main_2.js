
//SET DATASET
//Philadelphia Crashes 2016
var dataset = 'https://raw.githubusercontent.com/labyer/CPLN690_FinalProject/master/CrashData_2016.geojson';
// var dataset = 'https://raw.githubusercontent.com/labyer/CPLN690_FinalProject/master/NYC_CrashData.geojson';
var markers=[];



//MARKER STYLES
//all markers
var allMarkers =  {
   radius: 10,
   fillColor: '#93c0c0',
   weight: 0,
   fillOpacity: 1
};
//gender markers - F
var genderMarkers_F =  {
   radius: 10,
   fillColor: "#ffb170",
   weight: 0,
   fillOpacity: 1
};
//gender markers - M
var genderMarkers_M =  {
   radius: 10,
   fillColor: "#39538d",
   weight: 0,
   fillOpacity: 1
};
//day markers - Mon
var dayMarkers_Mon =  {
   radius: 10,
   fillColor: "#ff7400",
   weight: 0,
   fillOpacity: 1
};
//day markers - Tue
var dayMarkers_Tue =  {
   radius: 10,
   fillColor: "#1240ab",
   weight: 0,
   fillOpacity: 1
};
//day markers - Wed
var dayMarkers_Wed =  {
   radius: 10,
   fillColor: "#46b2b2",
   weight: 0,
   fillOpacity: 1
};
//day markers - Thu
var dayMarkers_Thu =  {
   radius: 10,
   fillColor: "#ffae6b",
   weight: 0,
   fillOpacity: 1
};
//day markers - Fri
var dayMarkers_Fri =  {
   radius: 10,
   fillColor: "#5f7ec6",
   weight: 0,
   fillOpacity: 1
};
//day markers - Sat
var dayMarkers_Sat =  {
   radius: 10,
   fillColor: "#ffce6b",
   weight: 0,
   fillOpacity: 1
};
//day markers - Sun
var dayMarkers_Sun =  {
   radius: 10,
   fillColor: "#4ebaba",
   weight: 0,
   fillOpacity: 1
};
//type markers - Auto_Ped
var typeMarkers_Auto_Ped =  {
   radius: 10,
   fillColor: "#46b2b2",
   weight: 0,
   fillOpacity: 1
};
//type markers - Auto_Bike
var typeMarkers_Auto_Bike =  {
   radius: 10,
   fillColor: "#1240ab",
   weight: 0,
   fillOpacity: 1
};
//type markers - Auto_Auto
var typeMarkers_Auto_Auto =  {
   radius: 10,
   fillColor: "#ff7400",
   weight: 0,
   fillOpacity: 1
};
//type markers - Auto_Fixed
var typeMarkers_Auto_Fixed =  {
   radius: 10,
   fillColor: "#ffae6b",
   weight: 0,
   fillOpacity: 1
};
//type markers - Bus_Ped
var typeMarkers_Bus_Ped =  {
   radius: 10,
   fillColor: "#5f7ec6",
   weight: 0,
   fillOpacity: 1
};
//type markers - Bus_Bike
var typeMarkers_Bus_Bike =  {
   radius: 10,
   fillColor: "#ffce6b",
   weight: 0,
   fillOpacity: 1
};
//type markers - Bus_Auto
var typeMarkers_Bus_Auto =  {
   radius: 10,
   fillColor: "#4ebaba",
   weight: 0,
   fillOpacity: 1
};
//type markers - Truck_Ped
var typeMarkers_Truck_Ped =  {
   radius: 10,
   fillColor: "#ffaa00",
   weight: 0,
   fillOpacity: 1
};
//type markers - Truck_Bike
var typeMarkers_Truck_Bike =  {
   radius: 10,
   fillColor: "#afa093",
   weight: 0,
   fillOpacity: 1
};
//type markers - ATV
var typeMarkers_ATV =  {
   radius: 10,
   fillColor: "#777f7f",
   weight: 0,
   fillOpacity: 1
};






//FILTER FUNCTIONS
//gender - F
var genderFilter_F = function(feature, layer){
  return feature.properties.Sex == 'F';
};
//gender - F
var genderFilter_M = function(feature, layer){
  return feature.properties.Sex == 'M';
};
//day - Monday
var dayFilter_Mon = function(feature, layer){
  return feature.properties.Day == 'Monday';
};
//day - Monday
var dayFilter_Tue = function(feature, layer){
  return feature.properties.Day == 'Tuesday';
};
//day - Monday
var dayFilter_Wed = function(feature, layer){
  return feature.properties.Day == 'Wednesday';
};
//day - Monday
var dayFilter_Thu = function(feature, layer){
  return feature.properties.Day == 'Thursday';
};
//day - Monday
var dayFilter_Fri = function(feature, layer){
  return feature.properties.Day == 'Friday';
};
//day - Monday
var dayFilter_Sat = function(feature, layer){
  return feature.properties.Day == 'Saturday';
};
//day - Monday
var dayFilter_Sun = function(feature, layer){
  return feature.properties.Day == 'Sunday';
};
//type - Auto_Ped
var typeFilter_Auto_Ped = function(feature, layer){
  return feature.properties.Type == 'Auto_Ped';
};
//type - Auto_Bike
var typeFilter_Auto_Bike = function(feature, layer){
  return feature.properties.Type == 'Auto_Bike';
};
//type - Auto_Auto
var typeFilter_Auto_Auto = function(feature, layer){
  return feature.properties.Type == 'Auto_Auto';
};
//type - Auto_Fixed
var typeFilter_Auto_Fixed = function(feature, layer){
  return feature.properties.Type == 'Auto_Fixed';
};
//type - Bus_Ped
var typeFilter_Bus_Ped = function(feature, layer){
  return feature.properties.Type == 'Bus_Ped';
};
//type - Bus_Bike
var typeFilter_Bus_Bike = function(feature, layer){
  return feature.properties.Type == 'Bus_Bike';
};
//type - Bus_Auto
var typeFilter_Bus_Auto = function(feature, layer){
  return feature.properties.Type == 'Bus_Auto';
};
//type - Truck_Ped
var typeFilter_Truck_Ped = function(feature, layer){
  return feature.properties.Type == 'Truck_Ped';
};
//type - Truck_Bike
var typeFilter_Truck_Bike = function(feature, layer){
  return feature.properties.Type == 'Truck_Bike';
};
//type - ATV
var typeFilter_ATV = function(feature, layer){
  return feature.properties.Type == 'ATV';
};





//POINT TO lAYER FUNCTIONS
// all markers
var pointToLayer_all = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//gender - F
var pointToLayer_gender_F = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//gender - F
var pointToLayer_gender_M = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//day - Mon
var pointToLayer_day_mon = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//day - Tue
var pointToLayer_day_tue = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//day - Wed
var pointToLayer_day_wed = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//day - Thu
var pointToLayer_day_thu = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//day - Fri
var pointToLayer_day_fri = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//day - Sat
var pointToLayer_day_sat = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//day - Sun
var pointToLayer_day_sun = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//type - Auto_Ped
var pointToLayer_type_Auto_Ped = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//type - Auto_Bike
var pointToLayer_type_Auto_Bike = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//type - Auto_Auto
var pointToLayer_type_Auto_Auto = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//type - Auto_Fixed
var pointToLayer_type_Auto_Fixed = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//type - Bus_Ped
var pointToLayer_type_Bus_Ped = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//type - Bus_Bike
var pointToLayer_type_Bus_Bike = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//type - Bus_Auto
var pointToLayer_type_Bus_Auto = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//type - Truck_Ped
var pointToLayer_type_Truck_Ped = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//type - Truck_Bike
var pointToLayer_type_Truck_Bike = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//type - ATV
var pointToLayer_type_ATV = function (feature, latlng) {
  return L.circleMarker(latlng, allMarkers);
};
//compare - gender
var pointToLayer_compare_gender = function (feature, latlng) {
  if (feature.properties.Sex == 'F'){
    return L.circleMarker(latlng, genderMarkers_F);
  }
  if (feature.properties.Sex == 'M'){
    return L.circleMarker(latlng, genderMarkers_M);
  }
};
//compare - day
var pointToLayer_compare_day = function (feature, latlng) {
  if (feature.properties.Day == 'Monday'){
    return L.circleMarker(latlng, dayMarkers_Mon);
  }
  if (feature.properties.Day == 'Tuesday'){
    return L.circleMarker(latlng, dayMarkers_Tue);
  }
  if (feature.properties.Day == 'Wednesday'){
    return L.circleMarker(latlng, dayMarkers_Wed);
  }
  if (feature.properties.Day == 'Thursday'){
    return L.circleMarker(latlng, dayMarkers_Thu);
  }
  if (feature.properties.Day == 'Friday'){
    return L.circleMarker(latlng, dayMarkers_Fri);
  }
  if (feature.properties.Day == 'Saturday'){
    return L.circleMarker(latlng, dayMarkers_Sat);
  }
  if (feature.properties.Day == 'Sunday'){
    return L.circleMarker(latlng, dayMarkers_Sun);
  }
};
//compare - type
var pointToLayer_compare_type = function (feature, latlng) {
  if (feature.properties.Type == 'Auto_Ped'){
    return L.circleMarker(latlng, typeMarkers_Auto_Ped);
  }
  if (feature.properties.Type == 'Auto_Bike'){
    return L.circleMarker(latlng, typeMarkers_Auto_Bike);
  }
  if (feature.properties.Type == 'Auto_Auto'){
    return L.circleMarker(latlng, typeMarkers_Auto_Auto);
  }
  if (feature.properties.Type == 'Auto_Fixed'){
    return L.circleMarker(latlng, typeMarkers_Auto_Fixed);
  }
  if (feature.properties.Type == 'Bus_Ped'){
    return L.circleMarker(latlng, typeMarkers_Bus_Ped);
  }
  if (feature.properties.Type == 'Bus_Bike'){
    return L.circleMarker(latlng, typeMarkers_Bus_Bike);
  }
  if (feature.properties.Type == 'Bus_Auto'){
    return L.circleMarker(latlng, typeMarkers_Bus_Auto);
  }
  if (feature.properties.Type == 'Truck_Ped'){
    return L.circleMarker(latlng, typeMarkers_Truck_Ped);
  }
  if (feature.properties.Type == 'Truck_Bike'){
    return L.circleMarker(latlng, typeMarkers_Truck_Bike);
  }
  if (feature.properties.Type == 'ATV'){
    return L.circleMarker(latlng, typeMarkers_ATV);
  }
};



//ON EACH FEATURE FUNCTION
// zoom
var zoomFeature = function(feature, layer) {
  layer.on('click', function (e) {
    $('#crash-info').empty();
    $('#info-bar').show();
    $('#gender-form').hide();
    $('#day-form').hide();
    $('#type-form').hide();
    $('#gender-legend').hide();
    $('#day-legend').hide();
    $('#type-legend').hide();
    map.fitBounds(this.getBounds());
    $('#reset-map-zoom-button').show();
    document.getElementById('reset-map-zoom-button').className = 'button-reset';
    var day = feature.properties.Day;
    var age = feature.properties.Age;
    var type = feature.properties.Type;
    var gender = feature.properties.Sex;
    var fatalityDate = feature.properties.FatalityDate;
    var html = '<div  id= "shape-'+feature.id+'" data-id = "'+feature.id+'">  <h4> Gender: '+gender+' <br>   Age: '+age+' <br> Crash Type: '+type+' <br>  Fatality Date:'+fatalityDate+' <br>  Day of the Week: '+day+'</div>';
    $('#crash-info').append(html);
  });
};






//FUNCTIONS TO CREATE SLIDES
//make global variable to store markers
var markers;
// slide 1 - intro
var setSlide1 = function(dataset){
  document.getElementById('filter-button').className = 'button-filter';
  document.getElementById('all-gender-filter-button').className = 'button-filter-gender';
  document.getElementById('all-day-filter-button').className = 'button-filter-day';
  document.getElementById('all-type-filter-button').className = 'button-filter-type';
  document.getElementById('reset-map-zoom-button').className = 'button-reset';
  document.getElementById('reset-original-map-button').className = 'button-original';
  $('#attraction-feature').text('');
  $('#info-bar').hide();
  $('#gender-form').hide();
  $('#day-form').hide();
  $('#type-form').hide();
  $('#reset-original-map-button').hide();
  $('#reset-map-zoom-button').hide();
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      pointToLayer: pointToLayer_all,
      onEachFeature: zoomFeature,
    });
    markers.addTo(map);
  });
  $('#filter-button').on('click', function(){
    markers.clearLayers();
    $('#info-bar').hide();
    $('#gender-form').hide();
    $('#day-form').hide();
    $('#type-form').hide();
    $('#reset-original-map-button').show();
    if($('#gender-radial-F').prop('checked')){
      setSlide2(dataset);
    }
    if($('#gender-radial-M').prop('checked')){
      setSlide3(dataset);
    }
    if($('#day-radial-mon').prop('checked')){
      setSlide4(dataset);
    }
    if($('#day-radial-tue').prop('checked')){
      setSlide5(dataset);
    }
    if($('#day-radial-wed').prop('checked')){
      setSlide6(dataset);
    }
    if($('#day-radial-thu').prop('checked')){
      setSlide7(dataset);
    }
    if($('#day-radial-fri').prop('checked')){
      setSlide8(dataset);
    }
    if($('#day-radial-sat').prop('checked')){
      setSlide9(dataset);
    }
    if($('#day-radial-sun').prop('checked')){
      setSlide10(dataset);
    }
    if($('#type-radial-auto-ped').prop('checked')){
      setSlide11(dataset);
    }
    if($('#type-radial-auto-bike').prop('checked')){
      setSlide12(dataset);
    }
    if($('#type-radial-auto-auto').prop('checked')){
      setSlide13(dataset);
    }
    if($('#type-radial-auto-fixed').prop('checked')){
      setSlide14(dataset);
    }
    if($('#type-radial-bus-ped').prop('checked')){
      setSlide15(dataset);
    }
    if($('#type-radial-bus-bike').prop('checked')){
      setSlide16(dataset);
    }
    if($('#type-radial-bus-auto').prop('checked')){
      setSlide17(dataset);
    }
    if($('#type-radial-truck-ped').prop('checked')){
      setSlide18(dataset);
    }
    if($('#type-radial-truck-bike').prop('checked')){
      setSlide19(dataset);
    }
    if($('#type-radial-atv').prop('checked')){
      setSlide20(dataset);
    }
    if($('#gender-radial-all').prop('checked')){
      setSlide21(dataset);
    }
    if($('#day-radial-all').prop('checked')){
      setSlide22(dataset);
    }
    if($('#type-radial-all').prop('checked')){
      setSlide23(dataset);
    }
  });
  $('#reset-original-map-button').on('click', function(){
    $('#gender-radial-F').prop('checked', false);
    $('#gender-radial-M').prop('checked', false);
    $('#day-radial-mon').prop('checked', false);
    $('#day-radial-tue').prop('checked', false);
    $('#day-radial-wed').prop('checked', false);
    $('#day-radial-thu').prop('checked', false);
    $('#day-radial-fri').prop('checked', false);
    $('#day-radial-sat').prop('checked', false);
    $('#day-radial-sun').prop('checked', false);
    $('#day-radial-all').prop('checked', false);
    $('#type-radial-auto-ped').prop('checked', false);
    $('#type-radial-auto-bike').prop('checked', false);
    $('#type-radial-auto-auto').prop('checked', false);
    $('#type-radial-auto-fixed').prop('checked', false);
    $('#type-radial-bus-ped').prop('checked', false);
    $('#type-radial-bus-bike').prop('checked', false);
    $('#type-radial-bus-auto').prop('checked', false);
    $('#type-radial-tuck-ped').prop('checked', false);
    $('#type-radial-truck-bus').prop('checked', false);
    $('#type-radial-atv').prop('checked', false);
    $('#gender-radial-all').prop('checked', false);
    $('#day-radial-all').prop('checked', false);
    $('#type-radial-all').prop('checked', false);
    markers.clearLayers();
    $('#filter-heading').text("");
    $('#info').text("This map represents Philadelphia deaths resulting from crashes. You can filter through the deaths by the victim's gender, day of the week of the crash, or the type of crash. You can also click on individual points to view additional details about the crash and the victim.");
    setSlide1(dataset);
    map.setView(new L.LatLng(40.006246, -75.130401),11);
  });
  $('#reset-map-zoom-button').on('click', function(){
    $('#gender-radial-F').prop('checked', false);
    $('#gender-radial-M').prop('checked', false);
    $('#day-radial-mon').prop('checked', false);
    $('#day-radial-tue').prop('checked', false);
    $('#day-radial-wed').prop('checked', false);
    $('#day-radial-thu').prop('checked', false);
    $('#day-radial-fri').prop('checked', false);
    $('#day-radial-sat').prop('checked', false);
    $('#day-radial-sun').prop('checked', false);
    $('#day-radial-all').prop('checked', false);
    $('#type-radial-auto-ped').prop('checked', false);
    $('#type-radial-auto-bike').prop('checked', false);
    $('#type-radial-auto-auto').prop('checked', false);
    $('#type-radial-auto-fixed').prop('checked', false);
    $('#type-radial-bus-ped').prop('checked', false);
    $('#type-radial-bus-bike').prop('checked', false);
    $('#type-radial-bus-auto').prop('checked', false);
    $('#type-radial-tuck-ped').prop('checked', false);
    $('#type-radial-truck-bus').prop('checked', false);
    $('#type-radial-atv').prop('checked', false);
    $('#gender-radial-all').prop('checked', false);
    $('#day-radial-all').prop('checked', false);
    $('#type-radial-all').prop('checked', false);
    $('#reset-map-zoom-button').hide();
    $('#info-bar').hide();
    $('#crash-info').empty();
    $('#gender-legend').hide();
    $('#day-legend').hide();
    $('#type-legend').hide();
    map.setView(new L.LatLng(40.006246, -75.130401),11);
    remove(markers);
  });
  $('#all-gender-filter-button').on('click', function(){
    $('#day-radial-mon').prop('checked', false);
    $('#day-radial-tue').prop('checked', false);
    $('#day-radial-wed').prop('checked', false);
    $('#day-radial-thu').prop('checked', false);
    $('#day-radial-fri').prop('checked', false);
    $('#day-radial-sat').prop('checked', false);
    $('#day-radial-sun').prop('checked', false);
    $('#day-radial-all').prop('checked', false);
    $('#type-radial-auto-ped').prop('checked', false);
    $('#type-radial-auto-bike').prop('checked', false);
    $('#type-radial-auto-auto').prop('checked', false);
    $('#type-radial-auto-fixed').prop('checked', false);
    $('#type-radial-bus-ped').prop('checked', false);
    $('#type-radial-bus-bike').prop('checked', false);
    $('#type-radial-bus-auto').prop('checked', false);
    $('#type-radial-tuck-ped').prop('checked', false);
    $('#type-radial-truck-bus').prop('checked', false);
    $('#type-radial-atv').prop('checked', false);
    $('#type-radial-all').prop('checked', false);
    $('#reset-map-zoom-button').hide();
    $('#info-bar').hide();
    $('#gender-form').show();
    $('#day-form').hide();
    $('#type-form').hide();
    map.setView(new L.LatLng(40.006246, -75.130401),11);
  });
  $('#all-day-filter-button').on('click', function(){
    $('#type-radial-auto-ped').prop('checked', false);
    $('#type-radial-auto-bike').prop('checked', false);
    $('#type-radial-auto-auto').prop('checked', false);
    $('#type-radial-auto-fixed').prop('checked', false);
    $('#type-radial-bus-ped').prop('checked', false);
    $('#type-radial-bus-bike').prop('checked', false);
    $('#type-radial-bus-auto').prop('checked', false);
    $('#type-radial-tuck-ped').prop('checked', false);
    $('#type-radial-truck-bus').prop('checked', false);
    $('#type-radial-all').prop('checked', false);
    $('#gender-radial-F').prop('checked', false);
    $('#gender-radial-M').prop('checked', false);
    $('#gender-radial-all').prop('checked', false);
    $('#reset-map-zoom-button').hide();
    $('#info-bar').hide();
    $('#day-form').show();
    $('#gender-form').hide();
    $('#type-form').hide();
    map.setView(new L.LatLng(40.006246, -75.130401),11);
  });
  $('#all-type-filter-button').on('click', function(){
    $('#day-radial-mon').prop('checked', false);
    $('#day-radial-tue').prop('checked', false);
    $('#day-radial-wed').prop('checked', false);
    $('#day-radial-thu').prop('checked', false);
    $('#day-radial-fri').prop('checked', false);
    $('#day-radial-sat').prop('checked', false);
    $('#day-radial-sun').prop('checked', false);
    $('#day-radial-all').prop('checked', false);
    $('#gender-radial-F').prop('checked', false);
    $('#gender-radial-M').prop('checked', false);
    $('#gender-radial-all').prop('checked', false);
    $('#reset-map-zoom-button').hide();
    $('#info-bar').hide();
    $('#type-form').show();
    $('#gender-form').hide();
    $('#day-form').hide();
    map.setView(new L.LatLng(40.006246, -75.130401),11);
  });
};
//gender - F
var setSlide2 = function(dataset) {
  markers.clearLayers();
  $('#filter-heading').text('Female Victims');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: genderFilter_F,
      pointToLayer: pointToLayer_gender_F,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//gender - M
var setSlide3 = function(dataset) {
  markers.clearLayers();
  $('#filter-heading').text('Male Victims');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: genderFilter_M,
      pointToLayer: pointToLayer_gender_M,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//day - Mon
var setSlide4 = function(dataset) {
  markers.clearLayers();
  $('#filter-heading').text('Monday Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: dayFilter_Mon,
      pointToLayer: pointToLayer_day_mon,
      onEachFeature: onEachFeature_bindPopup
    });
    markers.addTo(map);
  });
};
//day - Tue
var setSlide5 = function(dataset) {
  markers.clearLayers();
  $('#filter-heading').text('Tuesday Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: dayFilter_Tue,
      pointToLayer: pointToLayer_day_tue,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//day - Wed
var setSlide6 = function(dataset) {
  $('#filter-heading').text('Wednesday Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: dayFilter_Wed,
      pointToLayer: pointToLayer_day_wed,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//day - Thu
var setSlide7 = function(dataset) {
  $('#filter-heading').text('Thursday Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: dayFilter_Thu,
      pointToLayer: pointToLayer_day_thu,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//day - Fri
var setSlide8 = function(dataset) {
  $('#filter-heading').text('Friday Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: dayFilter_Fri,
      pointToLayer: pointToLayer_day_fri,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//day - Sat
var setSlide9 = function(dataset) {
  $('#filter-heading').text('Saturday Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: dayFilter_Sat,
      pointToLayer: pointToLayer_day_sat,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//day - Sun
var setSlide10 = function(dataset) {
  $('#filter-heading').text('Sunday Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: dayFilter_Sun,
      pointToLayer: pointToLayer_day_sun,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//type - Auto_Ped
var setSlide11 = function(dataset) {
  $('#filter-heading').text('Auto/Pedestrian Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: typeFilter_Auto_Ped,
      pointToLayer: pointToLayer_type_Auto_Ped,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//type - Auto_Bike
var setSlide12 = function(dataset) {
  $('#filter-heading').text('Auto/Bicycle Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: typeFilter_Auto_Bike,
      pointToLayer: pointToLayer_type_Auto_Bike,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//type - Auto_Auto
var setSlide13 = function(dataset) {
  $('#filter-heading').text('Auto/Auto Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: typeFilter_Auto_Auto,
      pointToLayer: pointToLayer_type_Auto_Auto,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//type - Auto_Fixed
var setSlide14 = function(dataset) {
  $('#filter-heading').text('Auto (solo) Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: typeFilter_Auto_Fixed,
      pointToLayer: pointToLayer_type_Auto_Fixed,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//type - Bus_Ped
var setSlide15 = function(dataset) {
  $('#filter-heading').text('Bus/Pedestrian Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: typeFilter_Bus_Ped,
      pointToLayer: pointToLayer_type_Bus_Ped,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//type - Bus_Bike
var setSlide16 = function(dataset) {
  $('#filter-heading').text('Bus/Bicycle Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: typeFilter_Bus_Bike,
      pointToLayer: pointToLayer_type_Bus_Bike,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//type - Bus_Auto
var setSlide17 = function(dataset) {
  $('#filter-heading').text('Bus/Auto Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: typeFilter_Bus_Auto,
      pointToLayer: pointToLayer_type_Bus_Auto,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });

};
//type - Truck_Ped
var setSlide18 = function(dataset) {
  $('#filter-heading').text('Truck/Pedestrian Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: typeFilter_Truck_Ped,
      pointToLayer: pointToLayer_type_Truck_Ped,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//type - Truck_Bike
var setSlide19 = function(dataset) {
  $('#filter-heading').text('Truck/Bicycle Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: typeFilter_Truck_Bike,
      pointToLayer: pointToLayer_type_Truck_Bike,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//type - ATV
var setSlide20 = function(dataset) {
  $('#filter-heading').text('ATV Crashes');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $('#final-legend').hide();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      filter: typeFilter_ATV,
      pointToLayer: pointToLayer_type_ATV,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//compare - gender
var setSlide21 = function(dataset) {
  $('#filter-heading').text(' Victim Gender Comparison');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').show();
  $('#day-legend').hide();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      pointToLayer: pointToLayer_compare_gender,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//compare - day
var setSlide22 = function(dataset) {
  $('#filter-heading').text('Crash Day of Week Comparison');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').show();
  $('#type-legend').hide();
  $('#crash-info').empty();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      pointToLayer: pointToLayer_compare_day,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};
//compare - type
var setSlide23 = function(dataset) {
  $('#filter-heading').text('Type of Crash Comparison');
  $('#info').text('Click on individual points to view additional details about the crash and the victim.');
  $('#gender-legend').hide();
  $('#day-legend').hide();
  $('#type-legend').show();
  $('#crash-info').empty();
  $.ajax(dataset).done(function(data) {
    map.removeLayer(markers);
    var parsedData = JSON.parse(data);
    markers = L.geoJson(parsedData, {
      pointToLayer: pointToLayer_compare_type,
      onEachFeature: zoomFeature
    });
    markers.addTo(map);
  });
};





//RUN IT!
$(document).ready(function() {
  setSlide1(dataset);
});




//make map
var map = L.map('map', {
  center: [40.006246, -75.130401],
  zoom: 11
});
var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);
