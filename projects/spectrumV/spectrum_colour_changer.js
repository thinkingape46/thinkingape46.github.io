// Changes the colour the ids every 1 sec with 1 sec transition.
// Connect it to a html to see it work or paste into web console

function getColour() {
    var buildBlock = "0123456789abcdef"
    var hexCode = "#"

    for (i = 0; i < 6; i++) {

        randomNumber = Math.floor(Math.random() * 16)
        randomeBuildBlock = buildBlock[randomNumber]
        hexCode = hexCode + randomeBuildBlock       

    }
    return hexCode
}

function headerColour() {

    var colour = getColour();
    var mySpectrum1 = document.querySelector("#violet");
    mySpectrum1.style.backgroundColor = colour;
    mySpectrum1.style.transition = "all 2s";

    var colour = getColour();
    var mySpectrum2 = document.querySelector("#indigo");
    mySpectrum2.style.backgroundColor = colour;
    mySpectrum2.style.transition = "all 2s";

    var colour = getColour();
    var mySpectrum3 = document.querySelector("#blue");
    mySpectrum3.style.backgroundColor = colour;
    mySpectrum3.style.transition = "all 2s";

    var colour = getColour();
    var mySpectrum4 = document.querySelector("#green");
    mySpectrum4.style.backgroundColor = colour;
    mySpectrum4.style.transition = "all 2s";

    var colour = getColour();
    var mySpectrum5 = document.querySelector("#teal");
    mySpectrum5.style.backgroundColor = colour;
    mySpectrum5.style.transition = "all 2s";
}

headerinterval = setInterval(headerColour, 2000)