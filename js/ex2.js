const displayText400 = () => {
    var textdisplay = document.getElementsByClassName("400level");
    for (var i = 0; i < textdisplay.length; i++) {
        console.log(textdisplay[i].innerText);
    }
};

displayText400();
