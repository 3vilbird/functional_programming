// wahat is functor


// it is a function that takes parameter and function as args

// unwraps the values and feeds them into the fun passed

// thrn returns the result in the structured format


// code needs to be added


// lets get our hands durty

// string function

const Stringfunctor = (value, fn) => {
    var chars = value.split("");
    return chars.map((char) => String.fromCharCode(fn(char.charCodeAt(0)))).join("")
}


const plus1 = value => value + 1;
const minus1 = value => value - 1;


console.log([4, 5].map(plus1)) // each element is passed to 

console.log(Stringfunctor("ABC", plus1));
console.log(Stringfunctor("XYZ", minus1));

