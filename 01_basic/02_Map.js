// lets check with map higher order function

// dofference between MAP and Filter 
// filter will through me the entire object ex   { name: 'Fluffykins', species: 'rabbit' },


// filter will verify the condition "true" or "false" based on the condition the object will be returned 


// map will return fully transformed object totally new object remember the resulted array will be of same length ok




var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
];


// map will return fully transformed object totally new object

var names = animals.map((animal) => animal.name + " is a " + animal.species)
console.log(names);




