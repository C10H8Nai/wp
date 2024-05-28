function changeTheme() {
    const isDay = document.getElementById('switchTheme').checked;
    //console.log("Debug:isNight>" + isNight);
    if (isDay) {
        //Day
        document.documentElement.style.setProperty('--body-background-color', '#e3e3e3');
        document.documentElement.style.setProperty('--body-text-color', '#1c2024');

        document.documentElement.style.setProperty('--div-background-color', '#b9c2c8be');
        document.documentElement.style.setProperty('--div-text-color', '#343b43be');
    } else {
        //Night
        document.documentElement.style.setProperty('--body-background-color', '#1c2024');
        document.documentElement.style.setProperty('--body-text-color', '#c9c9c9');

        document.documentElement.style.setProperty('--div-background-color', '#343b43be');
        document.documentElement.style.setProperty('--div-text-color', '#d6e1e6be');
    }
    
}

var div_Lside = document.getElementById("div_Lside");
function changeLside(){
    const isLside = document.getElementById('switchLside').checked;
    if(isLside){
        div_Lside.addEventListener("mouseover", function() {
            div_Lside.style.width = "200px";
        });
        div_Lside.addEventListener("mouseout", function() {
            div_Lside.style.width = "200px";
        });
    }else{
        div_Lside.addEventListener("mouseover", function() {
            div_Lside.style.width = "200px";
        });
        div_Lside.addEventListener("mouseout", function() {
            div_Lside.style.width = "100px";
        });
    }
}
