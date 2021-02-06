$(document).ready(function () {
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentenceCounter = 0;
    let letterCounter = 0;

    let currentSentence = sentences[sentenceCounter]
    let currentLetter = currentSentence[letterCounter]

    $("#keyboard-upper-container").hide();

    //create global sentenceCounter that starts at 0
    //same for letterCounter

    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            $("#keyboard-lower-container").hide();
            $("#keyboard-upper-container").show();
        }

        //check if e.keyCode matches the current letter in the current sentence
        //(array indexes)
            //increment letterCounter up every time this is the case
    })

    $(document).keyup(function (e) {
        let asciiLetter = e.key.charCodeAt(0)

        $(`#${asciiLetter}`).css("background-color", "lightgray")
        if (e.keyCode == 16) {
            $("#keyboard-lower-container").show();
            $("#keyboard-upper-container").hide();
        }
    });


    $(document).keypress(function (e) {
        $(`#${e.keyCode}`).css("background-color", "yellow")
    });
});


