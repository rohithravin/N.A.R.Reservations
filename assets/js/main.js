
function initMap() {

    var sf = {
      lat: 37.77493,
      lng: -122.419416
    };

    var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 4,
        center: sf
      });

    var marker = new google.maps.Marker({
      position: sf,
      map: map
    });

  }