"use strict"

function fizzBuzz() {
    console.log("FizzBuzz");
    for( let i = 1 ; i < 101 ; i++ ) {
        if ( esDivisiblePor5(i) && !esDivisiblePor3(i) )
            console.log("Buzz");
        else if ( esDivisiblePor3(i) )
            console.log("Fizz");
        else
            console.log(i);
    }
}

function esDivisiblePor3(numero) {
    let esDivisible = false;
    if ( numero % 3 == 0 )
        esDivisible = true;
    return esDivisible;
}

function esDivisiblePor5(numero) {
    let esDivisible = false;
    if ( numero % 5 == 0 )
        esDivisible = true;
    return esDivisible;
}