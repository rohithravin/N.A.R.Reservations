function closeForm() {
    document.getElementById("myForm").style.display = "none";
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
    });

    var marker5 = new google.maps.Marker({
      position: austin,
      map: map
    });

    marker5.addListener('click', function() {
      map.setZoom(15);
      map.setCenter(marker5.getPosition());
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
    });

  }