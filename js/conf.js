function populateSite() {
  document.getElementById("addy").innerHTML = "Address: " + localStorage.getItem("Address");
  document.getElementById("phone").innerHTML = "Contact Us: " + localStorage.getItem("Phone");
  console.log(localStorage.getItem("id"))
  console.log(localStorage.getItem("Long"))
  console.log(localStorage.getItem("Lat"))
  document.getElementById("title").innerHTML = localStorage.getItem("First_Name") + ", Your Reservation Is Confirmed!";


}

var map8 = null;

function initMap2() {


var tempLat = parseFloat(localStorage.getItem("Lat"));

	var tempLong = parseFloat(localStorage.getItem("Long"));

	var temp = {
	  lat: tempLat,
	  lng: tempLong
	};

    map8 = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 15,
        center: temp
    });

   var marker8 = new google.maps.Marker({
	  position: temp,
	  map: map8
	});
    populateSite();
}
