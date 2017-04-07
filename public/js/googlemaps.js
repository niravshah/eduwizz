$(window).load(function () {

    initGoogleMap();
});

function initGoogleMap() {
    var address = "Trimurti Enclave, Malad - West, Mumbai "; //Add your address here, all on
                                                             // one line.
    var latitude = 19.187624;
    var longitude = 72.843644;

    var options = {
        mapTypeControlOptions: {
            mapTypeIds: ['Styled']
        },
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 16,
        scrollwheel: true,
        navigationControl: true,
        mapTypeControl: true,
        zoomControl: true,
        disableDefaultUI: true
    };
    var div = document.getElementById('googleMap');
    var map = new google.maps.Map(div, options);
    marker = new google.maps.Marker({
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(latitude, longitude)
    });

    var infowindow = new google.maps.InfoWindow({
        content: "<div class='iwContent'>" + address + "</div>"
    });
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });

    bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-19.187624, -72.843644),
        new google.maps.LatLng(19.187624, 72.843644));

    rect = new google.maps.Rectangle({
        bounds: bounds,
        // fillColor: color,
        fillOpacity: 0.0,
        strokeWeight: 0,
        map: map
    });

}

