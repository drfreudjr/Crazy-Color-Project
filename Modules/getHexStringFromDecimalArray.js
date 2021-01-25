/* Get Hex String from Decimal Array */
'use strict';
let cl = console.log;

function getHexStringFromDecimalArray(decColor) {  // Tested: input [123,255,0]: output '#7bff00'
    decRed = decColor[0]
    decGreen = decColor[1]
    decBlue = decColor[2]

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
