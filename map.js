const getCoords = () => {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      localStorage.setItem("latitude", position.coords.latitude);
      localStorage.setItem("longitude", position.coords.longitude);
    },
    function(error) {
      console.error('Error getting the location: ', error.message);
    }
  )
}

let coords = [];
if ('geolocation' in navigator) {
  getCoords();
  console.log("Success");
}

if (localStorage.getItem("latitude") && localStorage.getItem("longitude")) {
  coords = [parseFloat(localStorage.getItem("latitude")), parseFloat(localStorage.getItem("longitude"))];
} else {
  coords = [51.505, -0.09];
}


console.log(coords);
let map = L.map('map').setView(coords, 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);