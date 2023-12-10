function createMap(airbnbMap){
    //create tile layer background
    let streetmap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
   }).addTo(myMap);
   //basemap to hold basic map
   let baseMaps = {
    "Street Map": streetmap
   };
   //overlay map to hold the airbnb rentals
   let overlayMaps = {
    "Airbnb Rentals": Rentals
   };
   //create map object
   let myMap=  L.map("map",{
    center:[40.73, -74.0059],
    zoom:13,
    layers: [streetmap, overlayMaps]
  });
   // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
   L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMapap);
}
//getting rental data from url
let url = "/api/v1.0/airbnbs";
//load usind d3
d3.json(url).then(function(data){

    console.log(data)

}).catch(function(error){

    console.log("Error at reading api: " + error);

});

//getting landmark data
let landmark="/api/v1.0/nyclandmarks";
d3.json(landmark).then(function(data){
    console.log(data)
}).catch(function(error){
    console.log("Error at landmark api" + error)
});
