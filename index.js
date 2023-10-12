//FourSquare API


 


//Get user location

const myMap = {
    coordinates: [],
    businesses: [],
    map: {},
    markers: {},
    


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


//var map = L.map('map').setView([33.2036, -117.2414], 13);
//var marker = L.marker([33.2036, -117.2414]).addTo(map);





//Add tiles

 