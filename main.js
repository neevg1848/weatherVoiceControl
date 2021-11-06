var speechRecog = window.webkitSpeechRecognition;
var recogn = new speechRecog();

function start(){
    document.getElementById("textbox").innerHTML="";
    recogn.start();
}

recogn.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content == "what's the weather today"){
        console.log("Fetching weather data");
        weather_data();
    }
}

