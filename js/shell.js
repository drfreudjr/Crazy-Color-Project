/* Javascript Shell */
// 'use strict';
let cl = console.log;

const elcanvas = document.querySelector("canvas")
const context = elcanvas.getContext("2d");
let boxColor = "#666666"                            //Starting color



RGBDecimalsFromHexString = function (hexcolorString) { 

    const colorArray= hexcolorString.split("")              // eg ['#','1','3','f','a','0','e']
    const redString = colorArray[1] + colorArray[2]         
    const greenString = colorArray[3] + colorArray[4]
    const blueString = colorArray[5] +colorArray[6]

    const redDecimalNumber = parseInt(redString, 16)        // 2nd parameter is base
    const greenDecimalNumber = parseInt(greenString, 16)
    const blueDecimalNumber = parseInt(blueString, 16)

    let rgbDecimalArray  = [redDecimalNumber, greenDecimalNumber, blueDecimalNumber]
    return rgbDecimalArray 
}




function getRandomChange (currentDecimalColor) {    //Tested for all values
    colorToChange = ''
    direction = ''
    startingRedValue = currentDecimalColor[0]
    startingGreenValue = currentDecimalColor[1]
    startingBlueValue = currentDecimalColor[2]

    ranColor = Math.round(Math.random() * 2) // Between 0-2
    if (ranColor == 0) 
        colorToChange = 'red'
    else if 
        (ranColor == 1)
        colorToChange = 'green'
    else
        colorToChange = 'blue'

    ranDirection = Math.round(Math.random() * 1) //0 up 1 down
    if (currentDecimalColor[ranColor] <= 0)  // check lower bound
        direction = 'up'
    else if (currentDecimalColor[ranColor] >= 255) //check upper bound
        direction = 'down'
    else if (ranDirection  == 0) // else use random
        direction = 'up'
    else
        direction = 'down'

    // cl(colorToChange, direction)
    colorDirectionArray = [ direction, ranColor, colorToChange];
    return colorDirectionArray
}

function convertBacktoHex(decColor) {
    decRed = decColor[0]
    decGreen = decColor[1]
    decBlue = decColor[2]

    decRed = 120 //test
    decGreen = 255
    decBlue = 212

    hexRed = decRed.toString(16)
    hexGreen = decGreen.toString(16)
    hexBlue = decBlue.toString(16)

    // cl(hexRed, hexGreen,hexBlue)

    if (hexRed.length == 1)
        hexRed = "0"+ hexRed
    if (hexGreen.length ==1)
        hexGreen = "0" + hexGreen
    if (hexBlue.length ==1)
        hexBlue = "0" + hexBlue
    // cl(hexRed, hexGreen,hexBlue)
    let finalString = '#' + hexRed + hexGreen + hexBlue
    // cl(finalString)
    return(finalString)
}

function crazyColor (hexColor) {
    decColor = RGBDecimalsFromHexString (hexColor)
    randomChange = getRandomChange(decColor)
    colorToChange = randomChange[1]
    direction = randomChange[0]
    // cl(randomChange)
    // cl (colorToChange, direction)
    // cl (decColor)
    if (direction == "down")
        -- decColor[colorToChange]
    else
        ++ decColor[colorToChange]
    // cl(decColor)
    finalString = convertBacktoHex(decColor)
    // cl('Finally', finalString)
    return(finalString)
}

// function drawScreen() {
//  //make changes here.
//     currentColor = boxColor
//     nextColor = crazyColor(currentColor)
//     cl(currentColor, nextColor)
//     context.fillStyle = boxColor;
//     context.lineWidth = 10;
//     context.fillRect(0,0,400,300)
//     // cl(boxColor)
// }

// function gameLoop() {    
//     window.setTimeout(gameLoop, 20);    
//     drawScreen()
// }

// for (i = 0; i <10; ++i) {
//     cl('drawing screen')
//     drawScreen()
// }
