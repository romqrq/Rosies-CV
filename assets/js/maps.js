function initMap() { //function called by the google script down in this page -- it initializes the map
    var map = new google.maps.Map(document.getElementById("map"), { //the object MAP is provided by the google maps api
        zoom: 3,
        center: { //setting the center point where the map will be started
            lat: 46.619261,
            lng: -33.134766
        }
    });

    //adding markers *****
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //first thing is to create some labels

    var locations = [ //array that contains a set of objects with the coordinates for each marker
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }
    ];


    //Now we need to iterate through that array and create a new marker that has the label from our string
    var markers = locations.map(function(location, i) { //this map method is a built in JS method! works similar to a forEach function. 
        return new google.maps.Marker({ //the difference is that .map returns an array with the results of looping through each item in 
            position: location, //our locations array.
            label: labels[i % labels.length] //The map method can take up to 3 arguments.
        }); //using %operator in case we have more than 26labels. It loops around and go Z to A instead of throwing an error
    });

    var markerCluster = new MarkerClusterer(map, markers, //sample code from google tutorial. creates marker img for our map and clusters them together if they're close
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
