// lets goooo


const DrillDown = (num) => {
    if (num === 0) return;
    console.log(num)
    DrillDown(num - 1);

}

//DrillDown(20);


let categories = [
    { id: "animals", 'parent': null },
    { id: "mammals", 'parent': 'animals' },
    { id: "cats", 'parent': 'mammals' },
    { id: "dogs", 'parent': 'mammals' },
    { id: "testdog1", 'parent': 'dogs' },
    { id: "testdog2", 'parent': 'dogs' },
    { id: "testcat1", 'parent': 'cats' },
    { id: "testcat2", 'parent': 'cats' },
]


let makeFun = (categories, parent) => {

    let node = {}
    categories.filter(c => c.parent === parent)
        .forEach(c => node[c.id] = makeFun(categories, c.id)
        );

    // if (Object.keys(node).length > 0)
    //     return node;
    // else
    // return


    return node;
}

console.log(
    JSON.stringify(makeFun(categories, null), null, 2)
)










