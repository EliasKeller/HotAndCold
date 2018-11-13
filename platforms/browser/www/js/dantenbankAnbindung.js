 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyDszd4W4FsdHZlydKzXQeLeyRuUnPISMOo",
     authDomain: "hot-and-cold-1540557064415.firebaseapp.com",
     databaseURL: "https://hot-and-cold-1540557064415.firebaseio.com",
     projectId: "hot-and-cold-1540557064415",
     storageBucket: "hot-and-cold-1540557064415.appspot.com",
     messagingSenderId: "280777800879"
 };

 firebase.initializeApp(config);


 //Referenz erstellen
 const dbRefObject = firebase.database().ref('coordinates');

 //alle Elemente von der Datenbank hollen und getWeather ausfühern
 dbRefObject.on('value', function(snapShot) {
         clearFavoriteCardContainer();
     snapShot.forEach(function(snapChild) {
         getWeather(snapChild.val().latitude, snapChild.val().longitude, snapChild.key);
     });
 });

 //Daten auf Datenbank speichern
 function pushCurrentLocationToDB() {
     dbRefObject.push({
         latitude: currentLatitude,
         longitude: currentLongitude
     });
 }

 function deleteLocationFromDB(dbKeyObj, locationNameObj){
    var dbKey = dbKeyObj.key.firstChild.data;
    var actualLocationName = locationNameObj.locationName.firstChild.data;

    dbRefObject.child(dbKey).remove(function(error) {
        if(error){
            Materialize.toast(actualLocationName + " konnte nicht aus den Favoriten entfernt!\nFehlercode: " + error, 2000, "rounded red");
        }else{
            Materialize.toast(actualLocationName + " wurde aus den Favoriten entfernt!", 2000, "rounded");
            Materialize.toast(actualLocationName + " konnte nicht aus den Favoriten entfernt!\nFehlercode: " + error, 2000, "rounded red");
        }
    });

 
    
 }

function getToast(){
    Materialize.toast(actualLocationName + " wurde aus den Favoriten entfernt!", 2000, "rounded");
}


 function clearFavoriteCardContainer(){
    const cardContainer = document.getElementById("favorite-card-container");
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }
 }
