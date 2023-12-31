




 //create map object
  
  let map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 12    
  });
  

  // Create the tile layer that will be the background of our map.
  let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

// Function to display the airbnbs map
function displayairbnbmap() {
  // Define the JSON URL
  let airbnbURL = "/api/airbnbs";
  d3.json(airbnbURL).then(function(data){
    
    data.forEach(function(d){
      let lat=d.lat;
      let long =d.long;
      let marker=L.marker([lat,long]).bindPopup("<h3> Neighborhood: " +d.neighbourhood+"<h3> price: "+d.price)
      marker.addTo(map);
    }
    });

  
// Function to display the landmarks map
function displayLandmarksmap() {
  // Define the JSON URL
  let landmarksURL = "/api/nyclandmarks";
  // Load the JSON data using d3
  d3.json(landmarksURL).then(function(data){
    data.forEach(function(d){
      let lat2 = d.Latitude;
      let long2 = d.Longitude;
      L.circle([lat2, long2], {
        color: "red",
        fillColor: "red",
        fillOpacity: 0.75,
        radius: 50
      }).addTo(map).bindPopup("<h3> Landmark: " + d.Location_Name+ "<h3> Description: "+d.Description);
    }    
    });

  




