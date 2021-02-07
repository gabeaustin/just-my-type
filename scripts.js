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

    $("#feedback").html("<div> " + sentencesArray +" </div>");
 
    // this is the array to move through the letters in the sentence array
    console.log(sentencesArray[sentenceCounter][letterCounter]);
    // console.log(sentencesArray[1]);
    
    // this will display the current letter key BEFORE any key is typed
    console.log("before keydown: " + currentLetter); // for testing

    $("#keyboard-upper-container").hide();
    
    // this highlights the key that user is pressing
    $(document).keypress(function(e) {
        $(`#${e.keyCode}`).css("background-color", "yellow");
    });
    
    // this hides the lowercase keyboard when the user presses the shift key 
    $(document).keydown(function(e) {
        if (e.keyCode == 16) {
            $("#keyboard-lower-container").hide();
            $("#keyboard-upper-container").show();
        }

        // the letter counter is increased each time a user presses a key
        letterCounter++;
        // this will check to see what letter the user is on - comparing the ascii key number to the actual character
        currentLetter = currentSentence[letterCounter];
        console.log(e.key); // for testing
        console.log("after keydown: " + currentLetter); // for testing
    })

    $(document).keyup(function (e) {
        // this shows the lowercase keyboard when the user releases the shift key 
        if (e.keyCode == 16) {
            $("#keyboard-lower-container").show();
            $("#keyboard-upper-container").hide();
        }

            let asciiLetter = e.key.charCodeAt(0); // this catches both lower & uppercase letters
            // console.log("This is Ascii letter after key up: " + asciiLetter); // for testing
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
    
    
    
})


