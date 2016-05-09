$(function () {

    $('#slider').slick({
        arrows: false,
        dots: true,
        fade: true
    });

});

function initMap() {

    var pos = {
        lat: -6.1966213,
        lng: 106.860404
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 11
    });


    var markerIcon = '//' + window.location.hostname + (window.location.port >= 3000 ? ':' + window.location.port : '') + '/app/img/marker.png'

    new google.maps.Marker({
        position: pos,
        icon: markerIcon,
        map: map
    });

    map.setCenter(pos);

    map.setZoom(11);
}