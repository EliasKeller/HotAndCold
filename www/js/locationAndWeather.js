//globale Variabeln für die aktuellen Koordinaten
var currentLatitude;
var currentLongitude;

//globale Variabeln für die Map und Marker
var map;
var marker;


// onSuccess Callback
var onSuccess = function(position) {
    currentLatitude = position.coords.latitude;
    currentLongitude = position.coords.longitude;

    initMap(currentLatitude, currentLongitude);
    getWeather(currentLatitude, currentLongitude, null);
};

navigator.geolocation.getCurrentPosition(onSuccess, onError);

// onError Callback -> Fehleralert ausgeben
function onError(error) {
    alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');

}

//Map bilden
function initMap(latitude, longitude) {

    map = new google.maps.Map(document.getElementById('currentLocation-map'), {
        center: { lat: latitude, lng: longitude },
        zoom: 14
    });

    marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Dein aktueller Standort'
    });
    marker.addListener('click', toggleBounce);
};

//Toggle-Animation dem marker zufügen
function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}


function getWeather(latitude, longitude, dbKey) {
    // Mein API-Key
    var OpenWeatherAppKey = "3d9369fa0e264d7816000e550152ac08";

    //API-Key, Latitude und Longitude in API-Link einfügen
    var queryString =
        'http://api.openweathermap.org/data/2.5/weather?lat=' +
        latitude + '&lon=' + longitude + '&appid=' + OpenWeatherAppKey + '&units=metric';

    //Mithilfe des ausgefüllten API-Key die Wetterdaten beschaffen
    $.getJSON(queryString, function(results) {

        if (results.weather.length) {

            if (dbKey == null) {
                showCurrentLocation(results);
            } else {
                showLocationFromDB(results, dbKey);
            }
        }
        //Fehlerhandling
    }).fail(function() {
        console.log("error getting location");
    });
}

//aktueller Standort mit den korrekten Wetterdaten abfüllen
function showCurrentLocation(results) {
    $('#currentLocation-locationName').text(results.name + ", " + results.sys.country);
    $('#currentLocation-visibility').attr("src", "img/weahter-icons/weather-overview/" + results.weather[0].icon + ".svg");
    $('#currentLocation-temp').text(results.main.temp + " C°");
    $('#currentLocation-wind').text(results.wind.speed + " km/h");
    $('#currentLocation-humidity').text(results.main.humidity + " %");

}

//Wetterdaten von den Favoriten anzeigen
function showLocationFromDB(results, dbKey) {
    // $('#favorite-card-template').show();
    var card = $('#favorite-card-template').clone();
    // template ausblenden
    // $('#favorite-card-template').hide();
    card.find('#key').html(dbKey);
    card.find('#locationName').html(results.name + ", " + results.sys.country);
    card.find('#visibility').attr("src", "img/weahter-icons/weather-overview/" + results.weather[0].icon + ".svg");
    card.find('#temp').html(results.main.temp + " C°");
    card.find('#humidity').html(results.main.humidity + " %");
    card.find('#wind').html(results.wind.speed + " km/h");
    $('#favorite-card-container').append(card);
}