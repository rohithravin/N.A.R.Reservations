function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openForm(addy, phone) {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("address").innerHTML = addy;
    document.getElementById("phone").innerHTML = "Contact Us: " + phone;
}

function initMap() {

    var sf = {
      lat: 37.77493,
      lng: -122.419416
    };

    var austin = {
      lat: 30.267153,
      lng: -97.743061
    };

    var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 4,
        center: austin
    });

    var marker = new google.maps.Marker({
      position: sf,
      map: map
    });

    marker.addListener('click', function() {
      map.setZoom(15);
      map.setCenter(marker.getPosition());
      openForm("3419 19th St, San Francisco, CA 94110","(415) - 967 - 2622");
      localStorage.setItem("Address", "3419 19th St, San Francisco, CA 94110");
      localStorage.setItem("Phone", "4159672622");
      localStorage.setItem("id", "01");
    });

    var la = {
      lat: 34.052234,
      lng: -118.243685
    };

    var marker2 = new google.maps.Marker({
      position: la,
      map: map
    });

    marker2.addListener('click', function() {
      map.setZoom(15);
      map.setCenter(marker2.getPosition());
      openForm("523 W 7th St, Los Angeles, CA 90014","(213) - 628 - 3146");
      localStorage.setItem("Address", "523 W 7th St, Los Angeles, CA 90014");
      localStorage.setItem("Phone", "2136283146");
      localStorage.setItem("id", "02");
    });

    var sj = {
      lat: 37.338208,
      lng: -121.886329
    };

    var marker3 = new google.maps.Marker({
      position: sj,
      map: map
    });

    marker3.addListener('click', function() {
      map.setZoom(15);
      map.setCenter(marker3.getPosition());
      openForm("428 E Santa Clara St, San Jose, CA 95113","(408) - 998 - 2353");
      localStorage.setItem("Address", "428 E Santa Clara St, San Jose, CA 95113");
      localStorage.setItem("Phone", "4089982353");
      localStorage.setItem("id", "03");
    });

    var cupertino = {
      lat: 37.322998,
      lng: -122.032182
    };

    var marker4 = new google.maps.Marker({
      position: cupertino,
      map: map
    });

    marker4.addListener('click', function() {
      map.setZoom(15);
      map.setCenter(marker4.getPosition());
      openForm("20080 Stevens Creek Blvd, Cupertino, CA 95014","(408) - 988 - 2353");
      localStorage.setItem("Address", "20080 Stevens Creek Blvd, Cupertino, CA 95014");
      localStorage.setItem("Phone", "4089882353");
      localStorage.setItem("id", "04");
    });

    var marker5 = new google.maps.Marker({
      position: austin,
      map: map
    });

    marker5.addListener('click', function() {
      map.setZoom(15);
      map.setCenter(marker5.getPosition());
      openForm("110 Inner Campus Drive, Austin, TX 78705","(512) - 471 - 3434");
      localStorage.setItem("Address", "110 Inner Campus Drive, Austin, TX 78705");
      localStorage.setItem("Phone", "5124713434");
      localStorage.setItem("id", "05");
    });

    var westlala = {
      lat: 40.425869,
      lng: -86.908066
    };

    var marker6 = new google.maps.Marker({
      position: westlala,
      map: map
    });

    marker6.addListener('click', function() {
      map.setZoom(15);
      map.setCenter(marker6.getPosition());
      openForm("101 Grant St, West Lafayette, IN 47906","(765) - 494 - 8900");
      localStorage.setItem("Address", "101 Grant St, West Lafayette, IN 47906");
      localStorage.setItem("Phone", "7654948900");
      localStorage.setItem("id", "06");

    });

    var ny = {
      lat: 40.712775,
      lng: -74.005
    };

    var marker7 = new google.maps.Marker({
      position: ny,
      map: map
    });

    marker7.addListener('click', function() {
      map.setZoom(15);
      map.setCenter(marker7.getPosition());
      openForm("27 West Fourth Street, New York, NY 1003","(212) - 998 - 1212");
      localStorage.setItem("Address", "27 West Fourth Street, New York, NY 1003");
      localStorage.setItem("Phone", "2129981212");
      localStorage.setItem("id", "07");
    });

  }
