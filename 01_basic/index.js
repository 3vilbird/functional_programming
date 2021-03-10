// beauty of functional programming


Array.prototype.reject = function (fn) {
    console.log(fn)
    console.log(this.filter(x => !fn(x)))
    return this.filter(x => !fn(x))
}



var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
];


var isDog = function (animal) {
    return animal.species === 'dog';
}

var Dogs = animals.filter(isDog);
console.log(Dogs)



var otherAnimals = animals.reject(isDog);
console.log(otherAnimals)