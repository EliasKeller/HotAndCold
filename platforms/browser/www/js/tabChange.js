//Tabwechsel
function tabClickEvent(t) {
    const favoriteContentDisplay = document.getElementById("tab1-content");
    const locationContentDisplay = document.getElementById("tab2-content");
    const searchContentDisplay = document.getElementById("tab3-content");

    switch (t) {
        case 1:
            favoriteContentDisplay.style.display = "inline";
            locationContentDisplay.style.display = "none";
            searchContentDisplay.style.display = "none";
            break;
        case 2:
            favoriteContentDisplay.style.display = "none";
            locationContentDisplay.style.display = "inline";
            searchContentDisplay.style.display = "none";
            break;
        case 3:
            favoriteContentDisplay.style.display = "none";
            locationContentDisplay.style.display = "none";
            searchContentDisplay.style.display = "inline";
            break;
        default:
    }

}