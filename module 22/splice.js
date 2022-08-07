const friends = [12, 21, 32, 43, 14, 54, 65, ];

// remove elements form an array 
// and, if secerrary, inserts new elements in their place,
// returning the deleted elements
// will change the original array 
// const partial = friends.splice(2, 5)
const partial = friends.splice(2, 5, 99, 555, 7777)
console.log(partial)
console.log(friends);


