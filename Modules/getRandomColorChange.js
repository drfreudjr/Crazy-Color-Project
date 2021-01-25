/* Return random RBB (ie 0 1 or 2 and 'up' or 'down') */
'use strict';
let cl = console.log;

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

    const colorDirectionArray = [direction, randomColor];
    return colorDirectionArray
}
