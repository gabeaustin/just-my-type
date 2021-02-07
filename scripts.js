$(document).ready(function () {
    let sentencesArray = [
        'ten ate neite ate nee enet ite ate inet ent eate', 
        'Too ato too nOt enot one totA not anot tOO aNot', 
        'oat itain oat tain nate eate tea anne inant nean', 
        'itant eate anot eat nato inate eat anot tain eat', 
        'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentenceCounter = 0;
    let letterCounter = 0;
    let currentSentence = sentencesArray[sentenceCounter];
    let currentLetter = currentSentence[letterCounter];

    console.log(sentencesArray[sentenceCounter][letterCounter]);
    // console.log(sentencesArray[1]);
    //create global sentenceCounter that starts at 0
    //same for letterCounter
    
    console.log("before keydown: " + currentLetter);

    $("#keyboard-upper-container").hide();
    
    $(document).keypress(function(e) {
        $(`#${e.keyCode}`).css("background-color", "yellow");
    });
    
    $(document).keydown(function(e) {
        if (e.keyCode == 16) {
            $("#keyboard-lower-container").hide();
            $("#keyboard-upper-container").show();
        }
    })

    $(document).keyup(function (e) {
        if (e.keyCode == 16) {
            $("#keyboard-lower-container").show();
            $("#keyboard-upper-container").hide();
        }

            let asciiLetter = e.key.charCodeAt(0); // this catches both lower & uppercase letters
            console.log("This is Ascii letter after key up: " + asciiLetter);
            $(`#${asciiLetter}`).css("background-color", "#f5f5f5");
    
            // console.log(("#keyboard-lower-container").val());
        });

    
    //check if e.keyCode matches the current letter in the current sentence
    //(array indexes)
    //increment letterCounter up every time this is the case
    
    // if(currentSentence.charCodeAt(99) === e.keyCode) {
    //     console.log("working?");
        
    //     letterCounter++;
    //     currentLetter; /* ??? */
      
    // }
    
    console.log("after keydown: " + currentLetter);
    
})


