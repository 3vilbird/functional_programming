const fs = require('fs')
// reduce higher order function

// it can  able to do any list transformation

var order = [
    { amout: 250 },
    { amout: 250 },
    { amout: 250 },
    { amout: 250 },
    { amout: 250 }
]

//FIXME: here for the reduce function first argument is the starting point may be number ,obj or array 

// second arg is the single item of the array


var total = order.reduce((sum, item) => (sum + item.amout), 0)

//console.log(total)

// ADVANCED 


var data = fs.readFileSync('./text.txt', 'utf8')
    .trim() // remove all thje space in the start and at the end
    .split('\n')
    .map(line => line.split(" "))
    .reduce((customers, line) => {
        customers[line[0]] = [];
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3],
        })
        return customers
    }, {})

console.log(JSON.stringify(data ,null ,2));




