
const userName = 'blackpink';
const userInput = 'blackpink';

console.log(userName.toUpperCase())
console.log(userName.toLocaleLowerCase())
console.log(userName.toLocaleUpperCase())
if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log('valid user name');
}
else {
    console.log('invalid user name')
}