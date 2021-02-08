$(document).ready(function () {
    let sentencesArray = [
        'ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot',
        'oat itain oat tain nate eate tea anne inant nean',
        'itant eate anot eat nato inate eat anot tain eat',
        'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentenceCounter = 0;
    let letterCounter = 0;
    let numberOfWords = 0;
    let numberOfMistakes = 0;
    let start = "";
    let end = "";

    let modifiedText = sentencesArray[sentenceCounter][letterCounter];
    let currentSentence = sentencesArray[sentenceCounter];
    let currentLetter = currentSentence[letterCounter];
    // $("#sentence").html(`<div>${currentSentence}</div>`);

    $("#sentence").html(modifiedText);
    $("#target-letter").text(sentencesArray[0].charAt(letterCounter));

    // THE LINE BELOW NEEDS WORK
    if (currentSentence >= 10) {
        $("#sentence").html("<div> " + currentSentence[1] + " </div>");
    }

    // this is the array to move through the letters in the sentence array
    console.log(sentencesArray[sentenceCounter][letterCounter]); // for testing
    $("#keyboard-upper-container").hide();

    // this highlights the key that user is pressing
    $(document).keypress(function (e) {
        $(`#${e.keyCode}`).css("background-color", "yellow");

        if (start = "") {
            start = new Date();
        }
        let sentence = sentencesArray[letterCounter];
        let sentenceLength = sentence.length;

        let letter = String.fromCharCode(e.keyCode);

        if (sentenceLength - 1 > letterCounter) {
            if (sentencesArray.charAt(letterCounter) == letter) {
                if (sentencesArray.charAt(letterCounter + 1) == " ") {
                    $("#target-leter").text("Space");
                } else {
                    $("#target-letter").text(sentence.charAt(letterCounter + 1));
                }

                $("#feedback").append(`<span class="glyphicon glyphicon-ok"></span>`)
                letterCounter++;
                modifiedText = sentence(letterCounter);
                $("#sentence").html(modifiedText);
            } else {
                $("#feedback").append(`<span class="glyphicon glyphicon-remove"></span>`);
                numberOfMistakes++;
            }
        } else {
            if (sentenceCounter < 4) {
                console.log("The End"); // for testing
                sentenceCounter++;
                $("#sentence").empty();
                $("#feedback").empty();
                letterCounter = 0;
                $("#target-letter").text(sentencesArray[sentenceCounter].charAt(letterCounter));
                modifiedText = sentencesArray[sentenceCounter](letterCounter);
                $("#sentence").html(modifiedText);
            } else if (sentenceCounter >= 4) {
                if (end = "") {
                    end = new Date();
                }

                minutes = ((end - start) / 1000) / 60;
                wpm = (numberOfWords / minutes) - (2 * numberOfMistakes);
            }
        }


    });

    // this hides the lowercase keyboard when the user presses the shift key 
    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            $("#keyboard-lower-container").hide();
            $("#keyboard-upper-container").show();
        }

        // the letterCounter is increased each time a user presses a key
        /* letterCounter++; */
        // this will check to see what letter the user is on - comparing the ascii key number to the actual character
        currentLetter = currentSentence[letterCounter];
        console.log(currentLetter); // for testing

        // if (currentSentence.charAt(currentLetter) == e.keyCode) {
        //     console.log(currentSentence).text();
        // } else {
        //     console.log(currentSentence);
        // }
    })

    $(document).keyup(function (e) {
        // this shows the lowercase keyboard when the user releases the shift key 
        if (e.keyCode == 16) {
            $("#keyboard-lower-container").show();
            $("#keyboard-upper-container").hide();
        }

        let asciiLetter = e.key.charCodeAt(0); // this catches both lower & uppercase letters
        $(`#${asciiLetter}`).css("background-color", "#f5f5f5");
    });


    //check if e.keyCode matches the current letter in the current sentence
    //(array indexes)
    //increment letterCounter up every time this is the case

})


