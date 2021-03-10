var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
];

// function 
var dogs = (animal) => animal.species === "dog"



// get all the dogs
// var isdog = animals.filter(dogs)
var isdog = animals.reduce(dogs)
console.log(" all the dogs ==>", isdog)
