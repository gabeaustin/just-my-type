$(document).ready(function(){
    $("#keyboard-upper-container").hide();
});

$(document).keydown(function (e) {
    if (e.keyCode == 16) {
        $("#keyboard-lower-container").hide();
        $("#keyboard-upper-container").show();
    }
}).keyup(function (e) {
    if (e.keyCode == 16) {
        $("#keyboard-lower-container").show();
        $("#keyboard-upper-container").hide();
    }
});


$(document).keydown(function(e) {
    // Row 1 - top keys (with shift pressed)
/*
    if (e.which == 81) { // ~
        console.log("~")
    }
    if (e.which == 33 && e.which == 16) { // !
        console.log("!")
    }
    if (e.which == 64 && e.which == 16) { // @
        console.log("@")
    }
    if (e.which == 35 && e.which == 16) { // #
        console.log("#")
    }
    if (e.which == 36 && e.which == 16) { // $
        console.log("$")
    }
    if (e.which == 37 && e.which == 16) { // %
        console.log("%")
    }
    if (e.which == 94 && e.which == 16) { // ^
        console.log("^")
    }
    if (e.which == 38 && e.which == 16) { // &
        console.log("&")
    }
    if (e.which == 42 && e.which == 16) { // *
        console.log("*")
    }
    if (e.which == 40 && e.which == 16) { // (
        console.log("(")
    }
    if (e.which == 41 && e.which == 16) { // )
        console.log(")")
    }
    if (e.which == 95 && e.which == 16) { // _
        console.log("_")
    }
    if (e.which == 43 && e.which == 16) { // +
        console.log("+")
    }
*/

    // UPPERCASE - row 2
    if (e.which == 81) { // Q
        console.log("Q")
    }
    if (e.which == 87) { // W
        console.log("W")
    }
    if (e.which == 69) { // E
        console.log("E")
    }
    if (e.which == 82) { // R
        console.log("R")
    }
    if (e.which == 84) { // T
        console.log("T")
    }
    if (e.which == 89) { // Y
        console.log("Y")
    }
    if (e.which == 85) { // U
        console.log("U")
    }
    if (e.which == 73) { // I
        console.log("I")
    }
    if (e.which == 79) { // O
        console.log("O")
    }
    if (e.which == 80) { // P
        console.log("P")
    }
    if (e.which == 123) { // {
        console.log("{")
    }
    if (e.which == 125) { // }
        console.log("}")
    }
    if (e.which == 124) { // |
        console.log("|")
    }

    // UPPERCASE - row 3
    if (e.which == 65) { // A
        console.log("A")
    }
    if (e.which == 83) { // S
        console.log("S")
    }
    if (e.which == 68) { // D
        console.log("D")
    }
    if (e.which == 70) { // F
        console.log("F")
    }
    if (e.which == 71) { // G
        console.log("G")
    }
    if (e.which == 72) { // H
        console.log("H")
    }
    if (e.which == 74) { // J
        console.log("J")
    }
    if (e.which == 75) { // K
        console.log("K")
    }
    if (e.which == 76) { // L
        console.log("L")
    }
    if (e.which == 58) { // :
        console.log(":")
    }
    // UPPERCASE - row 4
    if (e.which == 90) { // Z
        console.log("Z")
    }
    if (e.which == 88) { // X
        console.log("X")
    }
    if (e.which == 67) { // C
        console.log("C")
    }
    if (e.which == 86) { // V
        console.log("V")
    }
    if (e.which == 66) { // B
        console.log("B")
    }
    if (e.which == 78) { // N
        console.log("N")
    }
    if (e.which == 77) { // M
        console.log("M")
    }
    if (e.which == 60) { // &#60
        console.log("<")
    }
    if (e.which == 62) { // &#62
        console.log(">")
    }
    if (e.which == 63) { // ?
        console.log("?")
    }
    
    // UPPERCASE - row 4
    if (e.which == 90) { // Z
        console.log("Z")
    }
    if (e.which == 88) { // X
        console.log("X")
    }
    if (e.which == 67) { // C
        console.log("C")
    }
    if (e.which == 86) { // V
        console.log("V")
    }
    if (e.which == 66) { // B
        console.log("B")
    }
    if (e.which == 78) { // N
        console.log("N")
    }
    if (e.which == 77) { // M
        console.log("M")
    }
    if (e.which == 60) { // &#60
        console.log("<")
    }
    if (e.which == 62) { // &#62
        console.log(">")
    }
    if (e.which == 63) { // ?
        console.log("?")
    }
    // UPPERCASE - row 4
    if (e.which == 90) { // Z
        console.log("Z")
    }
    if (e.which == 88) { // X
        console.log("X")
    }
    if (e.which == 67) { // C
        console.log("C")
    }
    if (e.which == 86) { // V
        console.log("V")
    }
    if (e.which == 66) { // B
        console.log("B")
    }
    if (e.which == 78) { // N
        console.log("N")
    }
    if (e.which == 77) { // M
        console.log("M")
    }
    if (e.which == 60) { // &#60
        console.log("<")
    }
    if (e.which == 62) { // &#62
        console.log(">")
    }
    if (e.which == 63) { // ?
        console.log("?")
    }

    // lowercase - row 1
    if (e.which == 96) { // `
        console.log("`")
    }
    if (e.which == 49) { // 1
        console.log("1")
    }
    if (e.which == 50) { // 2
        console.log("2")
    }
    if (e.which == 51) { // 3
        console.log("3")
    }
    if (e.which == 52) { // 4
        console.log("4")
    }
    if (e.which == 53) { // 5
        console.log("5")
    }
    if (e.which == 54) { // 6
        console.log("6")
    }
    if (e.which == 55) { // 7
        console.log("7")
    }
    if (e.which == 56) { // 8
        console.log("8")
    }
    if (e.which == 57) { // 9
        console.log("9")
    }
    if (e.which == 48) { // 0
        console.log("0")
    }
    if (e.which == 45) { // -
        console.log("-")
    }
    if (e.which == 61) { // =
        console.log("=")
    }


});



