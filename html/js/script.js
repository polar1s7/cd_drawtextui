window.addEventListener('message', function(event){
    if(event.data.action == "show"){
        document.getElementById("text").innerHTML = event.data.text;
        document.getElementById("container").classList.remove("fadeOut");
        document.getElementById("container").classList.add("fadeIn");
        document.documentElement.style.setProperty("--selection-background", "DarkTurquoise"); /* default blue */ 
        if(event.data.color != undefined){
            document.documentElement.style.setProperty("--selection-background", event.data.color);
        }
    } else if(event.data.action == "hide"){
        document.getElementById("container").classList.remove("fadeIn");
        document.getElementById("container").classList.add("fadeOut");
    }
});

/* I honestly don't know what i am doing */
