
var watch_id

function page_load_callback()
{
    begin_watching_position()
}

function begin_watching_position()
{
    position_options = {
        enableHighAccuracy: false,
        // timeout: 10000,
        maximumAge: 60000
    };


    navigator.geolocation.watchPosition(position_success_callback, position_error_callback, position_options)
}

function position_success_callback(position)
{
    var lat = position.coords.latitude
    var long = position.coords.longitude

    $("#log").append("<p> lat:" + lat + ", " + long + "</p>")

}

function position_error_callback(position_error)
{

}

function initMap() 
{
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}

