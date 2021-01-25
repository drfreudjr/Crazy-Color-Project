/* Get RBD Decimal Array from Hex String */
'use strict';
let cl = console.log;


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
