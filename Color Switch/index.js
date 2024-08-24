"use strict"

function switchBackgroundColor(color) {
    const body = document.getElementsByTagName("body")[0];
    if ( color != "random" )
        body.style.backgroundColor = color;
    else {
        const r = Math.round(Math.random() * 256);
        const g = Math.round(Math.random() * 256);
        const b = Math.round(Math.random() * 256);
        const colorRandom = `rgb(${r}, ${g}, ${b})`;
        body.style.backgroundColor = colorRandom;
    }
}
