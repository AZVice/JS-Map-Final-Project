    var map = L.map('map').setView([33.2036, -117.2414], 13);

    var searchResults = L.layerGroup().addTo(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    document.getElementById("searchButton").addEventListener('click', function() {
        searchNearbyPlaces();
    });

    function searchNearbyPlaces() {
        var category = document.getElementById('field').value;
        var apiKey = '';


        searchResults.clearLayers();

        var request = {
            location: new google.maps.LatLng(33.2036, -117.2414),
            radius: 1500,
            type: [category],
        };

        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, function(results, status) {
            if(status === google.maps.places.PlacesServiceStatus.OK ) {
                for(var i = 0; i < results.length; i++) {
                    var place = results [i];

                    var marker = L.marker([place.geometry.location.lat(), place.geometry.location.lng()])
                        .bindPopup(place.name);
                    searchResults.addLayer(marker);
                }
            }
        });
    }

    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&libraries=places';
    document.body.appendChild(script);


/*   

















































































/*

//Get user location

/*const myMap = {
    coordinates: [],
    businesses: [],
    map: {},
    markers: {},*/

    
    
/*

    buildMap: function(){
            this.map = L.map('map', {
            center: this.coordinates,
            zoom: 11,
            });
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            }).addTo(this.map);

        //Add marker for my location
            const marker = L.marker(this.coordinates)

            .addTo(this.map)
            .binPopup('<p>You are here</p>')
            .openPopup()

    },   

}


// get forsquare businesses



// process foursquare array


async function getCoords(){
    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve,reject)
    });
    return[pos.coords.latitute,pos.coords.longitute]
}

window.onload = async () => {
    const coords = await getCoords()
    console.log(coords)
    myMap.coordinates = coords
    myMap.buildMap()
}

document.getElementById('submit').addEventListener('click', async (event) => {
    event.preventDefault()
    let businesses = document.getElementById('business').value 
    console.log(businesses)
})


*/





//Add tiles

 