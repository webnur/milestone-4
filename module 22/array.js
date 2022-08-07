
const country = 'Bangladesh';
const number = 40;
const friends = [12, 34, 45, 65]
const student = {name: 'Tanvir', age: 23, class: 11}
function add(num1 , num2){
    return num1 + num2;
}

console.log(typeof country)
console.log(typeof number)

// check array usign Array.isArray
console.log(Array.isArray(friends))

//-----------------
console.log(friends.includes(21))

const newFriendAge = [57, 76, 98]
const allFriends = newFriendAge.concat(friends)
console.log(allFriends)

console.log(typeof student)
console.log(typeof add)