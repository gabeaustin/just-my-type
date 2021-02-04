$(document).ready(function(){
    $("#keyboard-upper-container").hide();
});

$(document).keydown(function (e) {
    if (e.keyCode == 16) {
        // console.log("The shift key was pressed");
        $("#keyboard-lower-container").hide();
        $("#keyboard-upper-container").show();
    }

});

$(document).keyup(function (e) {
    if (e.keyCode == 16) {
        // console.log("The shift key was released.");
        $("#keyboard-lower-container").show();
        $("#keyboard-upper-container").hide();
    }
});

