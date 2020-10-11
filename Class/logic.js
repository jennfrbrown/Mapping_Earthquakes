// Create a map object
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  
  // Add a tile layer
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
    id: 'mapbox/streets-v11',
      accessToken: API_KEY
  }).addTo(myMap);
  
  // City markers

  // Add code to create a marker for each city below and add it to the map
  var cities = 
  // newyork;
let newyork = L.Marker([40.7128, -74.0060]).addTo(myMap);

  // chicago;
  // houston;
  // la;
  //  Add a marker to the map for Los Angeles, California.
let marker = L.marker([34.0522, -118.2437]).addTo(myMap);
  // omaha;

  cities.forEach(city => L.marker(city.location)
                        .bindPopup(<h1>$<city.name}</h1><hr><h3></h3></hr>))