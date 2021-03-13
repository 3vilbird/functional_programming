// i promise you

// https://www.youtube.com/watch?v=2d7s3spWAzo&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=8

// this function colud be a database call 
// loading files etc
const getdata = x => x;


// returns  result  array  
Promise.all([
    getdata("firstPromise"),
    getdata("secondPromise"),
    getdata("thirdPromise"),
]).then((resarray) => resarray.forEach(x => console.log(x)))
    .catch((err) => {
        // error handling
    })