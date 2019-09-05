{"filter":false,"title":"maps.js","tooltip":"/assets/js/maps.js","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":31,"column":13},"action":"insert","lines":["<script>","        function initMap() { //function called by the google script down in this page -- it initializes the map","            var map = new google.maps.Map(document.getElementById(\"map\"), { //the object MAP is provided by the google maps api","                zoom: 3,","                center: { //setting the center point where the map will be started","                    lat: 46.619261,","                    lng: -33.134766","                }","            });","            ","            //adding markers *****","            var labels = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\"; //first thing is to create some labels","            ","            var locations = [ //array that contains a set of objects with the coordinates for each marker","                {lat: 40.785091, lng: -73.968285 },","                {lat: 41.084045, lng: -73.874245 },","                {lat: 40.754932, lng: -73.984016 }","            ];","            ","            ","            //Now we need to iterate through that array and create a new marker that has the label from our string","            var markers = locations.map(function(location, i) { //this map method is a built in JS method! works similar to a forEach function. ","                return new google.maps.Marker({                 //the difference is that .map returns an array with the results of looping through each item in ","                    position: location,                         //our locations array.","                    label: labels[i % labels.length]            //The map method can take up to 3 arguments.","                });                                             //using %operator in case we have more than 26labels. It loops around and go Z to A instead of throwing an error","            });","            ","             var markerCluster = new MarkerClusterer(map, markers, //sample code from google tutorial. creates marker img for our map and clusters them together if they're close","            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});","        }","    </script>"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":8},"action":"remove","lines":["<script>"],"id":2},{"start":{"row":31,"column":4},"end":{"row":31,"column":13},"action":"remove","lines":["</script>"]},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":8},"action":"remove","lines":["","        "],"id":3},{"start":{"row":1,"column":0},"end":{"row":1,"column":8},"action":"remove","lines":["        "]},{"start":{"row":2,"column":0},"end":{"row":2,"column":6},"action":"remove","lines":["      "]},{"start":{"row":2,"column":8},"end":{"row":2,"column":10},"action":"remove","lines":["  "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":8},"action":"remove","lines":["        "]},{"start":{"row":4,"column":12},"end":{"row":4,"column":20},"action":"remove","lines":["        "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"remove","lines":["    "]},{"start":{"row":5,"column":12},"end":{"row":5,"column":16},"action":"remove","lines":["    "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":8},"action":"remove","lines":["        "]},{"start":{"row":7,"column":4},"end":{"row":7,"column":12},"action":"remove","lines":["        "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":12},"action":"remove","lines":["            "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":8},"action":"remove","lines":["        "]},{"start":{"row":10,"column":4},"end":{"row":10,"column":12},"action":"remove","lines":["        "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":12},"action":"remove","lines":["            "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":8},"action":"remove","lines":["        "]},{"start":{"row":13,"column":8},"end":{"row":13,"column":12},"action":"remove","lines":["    "]},{"start":{"row":13,"column":8},"end":{"row":13,"column":9},"action":"insert","lines":["{"]},{"start":{"row":13,"column":10},"end":{"row":13,"column":14},"action":"remove","lines":["   {"]},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "]},{"start":{"row":14,"column":8},"end":{"row":14,"column":11},"action":"remove","lines":["   "]},{"start":{"row":14,"column":8},"end":{"row":14,"column":9},"action":"insert","lines":["{"]},{"start":{"row":14,"column":10},"end":{"row":14,"column":13},"action":"remove","lines":["  {"]},{"start":{"row":15,"column":8},"end":{"row":15,"column":11},"action":"remove","lines":["   "]},{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"insert","lines":["{"]},{"start":{"row":15,"column":10},"end":{"row":15,"column":15},"action":"remove","lines":["    {"]},{"start":{"row":16,"column":4},"end":{"row":16,"column":12},"action":"remove","lines":["        "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":12},"action":"remove","lines":["            "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":12},"action":"remove","lines":["            "]},{"start":{"row":19,"column":4},"end":{"row":19,"column":12},"action":"remove","lines":["        "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":8},"action":"remove","lines":["        "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":3},"action":"remove","lines":["   "]},{"start":{"row":21,"column":8},"end":{"row":21,"column":13},"action":"remove","lines":["     "]},{"start":{"row":21,"column":40},"end":{"row":21,"column":56},"action":"remove","lines":["                "]},{"start":{"row":22,"column":12},"end":{"row":22,"column":20},"action":"remove","lines":["        "]},{"start":{"row":22,"column":32},"end":{"row":22,"column":56},"action":"remove","lines":["                        "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":3},"action":"remove","lines":["   "]},{"start":{"row":23,"column":12},"end":{"row":23,"column":17},"action":"remove","lines":["     "]},{"start":{"row":23,"column":45},"end":{"row":23,"column":56},"action":"remove","lines":["           "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":6},"action":"remove","lines":["      "]},{"start":{"row":24,"column":8},"end":{"row":24,"column":10},"action":"remove","lines":["  "]},{"start":{"row":24,"column":12},"end":{"row":24,"column":56},"action":"remove","lines":["                                            "]},{"start":{"row":25,"column":4},"end":{"row":25,"column":12},"action":"remove","lines":["        "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":12},"action":"remove","lines":["            "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":9},"action":"remove","lines":["         "]},{"start":{"row":28,"column":8},"end":{"row":28,"column":10},"action":"remove","lines":["  "]},{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"insert","lines":["{"]},{"start":{"row":28,"column":10},"end":{"row":28,"column":12},"action":"remove","lines":[" {"]},{"start":{"row":28,"column":109},"end":{"row":28,"column":110},"action":"insert","lines":[" "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":8},"action":"remove","lines":["        "]}]]},"ace":{"folds":[],"scrolltop":31,"scrollleft":0,"selection":{"start":{"row":30,"column":0},"end":{"row":30,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1567605998720,"hash":"17b487faaf16ae9e8df49ab7dbabf129372784f4"}