$("#country").change(function(){
    let country = $("#country").val();
    
    if(country!=""){
        alert("You have selected the country - " + country);
    }
});