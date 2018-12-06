function populateSite() {
  document.getElementById("addy").innerHTML = "Address: " + localStorage.getItem("Address");
  var temp  = localStorage.getItem("Phone");
  document.getElementById("phone").innerHTML = "Contact Us: " + '(' + temp.substring(0,3) + ') - ' + temp.substring(3,6) + ' - ' + temp.substring(6) ;
  console.log(localStorage.getItem("id"))
  console.log(localStorage.getItem("Long"))
  console.log(localStorage.getItem("Lat"))
  document.getElementById("title").innerHTML = localStorage.getItem("First_Name") + ", Your Reservation Is Confirmed!";

  var full_name = localStorage.getItem("Full_Name");
  var email = localStorage.getItem("Email");
  var address = localStorage.getItem("Address");
  var phone = localStorage.getItem("Phone");
  var guests = localStorage.getItem("Guests")

  var text = 'Hi ' + full_name + ',\n\nYour Reservation for '+ guests + ' people at the N. A. R. has been confirmed!\n\nAddress: ' + address + '\nPhone Number: ' + '(' + temp.substring(0,3) + ') - ' + temp.substring(3,6) + ' - ' + temp.substring(6) +'\n\n' +
              'Hope to see you soon!\n\nRegards,\nN. A. R. Staff';
  content = {email:email, text:text}


  var xhr = new XMLHttpRequest();
  var url = 'https://shrouded-badlands-47801.herokuapp.com/sendConfirmationEmail' ;
  xhr.open('POST', url , true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        if (json['success'] == 1){
          console.log('Reservation Email Sent!')
        }
        console.log(json);
    }
  };
  var data = JSON.stringify(content);
  xhr.send(data);

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
