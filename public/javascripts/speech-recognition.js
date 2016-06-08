var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

recognition.onStart = function(){
    if (recognizing) {
        recognition.stop();
        return;
    }
    recognizing = true;
}

recognition.onresult = function(event) {
    var final_transcript = "";
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            $("#question").text += event.results[i][0].transcript;
        }
        else {
        	$("#question").text += event.results[i][0].transcript;
      }
    }
    alert(final_transcript);
};

function startSpeechRec(){
    recognition.lang = "en-US";
    recognition.start();
}