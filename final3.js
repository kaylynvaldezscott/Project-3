let myMap=  L.map("map",{
    center:[40.73, -74.0059],
    zoom:13
  });
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);


let marker=  L.marker([40.73, -74.0059],{
  draggable: true,
  title:"Welcome to New York!"
}).addTo(myMap);

//marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
marker.bindPopup("<h1>Welcome to New York!</h1>This is a landmark.");

// now i want to use our data to set as base layer.
// create array to store markers
let airbnbMarkers = []

let latobj = latlong_airbnb_data.lat;
let longobj = latlong_airbnb_data.long.
for (let i = 0; i < latlong_airbnb_data.length; i++) {
    const coordinates = [latobj[i].latitude, longobj[i].longitude];
    L.marker(coordinates).addTo(myMap);
}