const route = (event, countryName) => {

    event = event || window.event;
    event.preventDefault();
    
   
    window.history.pushState({}, '', `/country/${countryName}`);
    
    
    // showCountryDetails(countryName);
}

window.route = r