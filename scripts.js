$(document).ready(function () {
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


$(document).keydown(function (e) {
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
        $('#81').css('background-color', 'yellow');
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

    // lowercase - row 2
    if (e.which === "#113") { // q
        console.log("q")
        $("#113").css("background-color", "yellow");
    }
    if (e.which == 119) { // w
        console.log("w")
    }
    if (e.which == 101) { // e
        console.log("e")
    }
    if (e.which == 114) { // r
        console.log("r")
    }
    if (e.which == 116) { // t
        console.log("t")
    }
    if (e.which == 121) { // y
        console.log("y")
    }
    if (e.which == 117) { // u
        console.log("u")
    }
    if (e.which == 105) { // i
        console.log("i")
    }
    if (e.which == 111) { // o
        console.log("o")
    }
    if (e.which == 112) { // p
        console.log("p")
    }
    if (e.which == 91) { // [
        console.log("[")
    }
    if (e.which == 93) { // ]
        console.log("]")
    }

    // lowercase - row 3
    if (e.which == 97) { // a
        console.log("a")
    }
    if (e.which == 115) { // s
        console.log("s")
    }
    if (e.which == 100) { // d
        console.log("d")
    }
    if (e.which == 102) { // f
        console.log("f")
    }
    if (e.which == 103) { // g
        console.log("g")
    }
    if (e.which == 104) { // h
        console.log("h")
    }
    if (e.which == 106) { // j
        console.log("j")
    }
    if (e.which == 107) { // k
        console.log("k")
    }
    if (e.which == 108) { // l
        console.log("l")
    }
    if (e.which == 59) { // ;
        console.log(";")
    }
    if (e.which == 39) { // '
        console.log("'")
    }

    // lowercase - row 4
    if (e.which == 122) { // z
        console.log("z")
    }
    if (e.which == 120) { // x
        console.log("x")
    }
    if (e.which == 99) { // c
        console.log("c")
    }
    if (e.which == 118) { // v
        console.log("v")
    }
    if (e.which == 98) { // b
        console.log("b")
    }
    if (e.which == 110) { // n
        console.log("n")
    }
    if (e.which == 109) { // m
        console.log("m")
    }
    if (e.which == 44) { // ,
        console.log(",")
    }
    if (e.which == 46) { // .
        console.log(".")
    }
    if (e.which == 47) { // /
        console.log("/")
    }

    // space bar
    if (e.which == 32) { // space bar
        console.log("space bar")
    }
});



