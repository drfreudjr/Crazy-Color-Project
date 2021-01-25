/* Javascript Shell */
// 'use strict';
let cl = console.log;

const elcanvas = document.querySelector("canvas")
const context = elcanvas.getContext("2d");
let boxColor = "#666666"                            //Starting color



function getRGBDecimalArrayFromHexString (hexColorString) { // Tested: input '#fffa0e': output RGB array
    const colorArray= hexColorString.split("")              // eg ['#','f','f','f','a','0','e']
    const redString = colorArray[1] + colorArray[2]         // eg 'FF'
    const greenString = colorArray[3] + colorArray[4]
    const blueString = colorArray[5] +colorArray[6]

    const redDecimal = parseInt(redString, 16)        // 2nd parameter is base
    const greenDecimal = parseInt(greenString, 16)
    const blueDecimal = parseInt(blueString, 16)

    const rgbDecimalArray  = [redDecimal, greenDecimal, blueDecimal]
    return rgbDecimalArray 
}

function getHexStringFromDecimalArray(rgbArray) {  // Tested: input [123,255,0]: output '#7bff00'
    decRed = rgbArray[0]
    decGreen = rgbArray[1]
    decBlue = rgbArray[2]

    hexRed = decRed.toString(16)
    hexGreen = decGreen.toString(16)
    hexBlue = decBlue.toString(16)

    if (hexRed.length == 1)     // Add leading zero for single digit numbers
        hexRed = "0"+ hexRed
    if (hexGreen.length ==1)
        hexGreen = "0" + hexGreen
    if (hexBlue.length ==1)
        hexBlue = "0" + hexBlue

    let finalString = '#' + hexRed + hexGreen + hexBlue
    return(finalString)
}

function getRandomColorChange(colorArray) { // Return integer 0,1,2 and 'up'/'down'

    let direction = ''

    const randomColor = Math.round(Math.random() * 2) // Between 0-2
    const randomDirection = Math.round(Math.random() * 1) //0 up 1 down

    if (colorArray[randomColor] <= 0) 
        direction = 'up'
    else if (colorArray[randomColor] >= 255) 
        direction = 'down'
    else if (randomDirection  == 0)
        direction = 'up'
    else 
        direction = 'down'

    const colorDirectionArray = [randomColor, direction]; // eg [1, 'down']
    return colorDirectionArray
}


crazyColor('#000000')

function crazyColor (hexColor) {        //eg input '#45fe02' output '#45fe03'
    rgbArray = getRGBDecimalArrayFromHexString(hexColor)
    randomChange = getRandomColorChange(rgbArray)  //eg [1,'down']
    colorToChange = randomChange[0] // eg 1
    direction = randomChange[1]  // eg 'down'
    if (direction == "down")
        -- rgbArray[colorToChange]
    else
        ++ rgbArray[colorToChange]
    finalString = getHexStringFromDecimalArray(rgbArray)
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
