
var shoppingCard = {
    books: 3,
    sunGlass: 1,
    keyborad: 5,
    mouse: 1,
    pen: 25

}

var penCount = shoppingCard.pen;
var penCount2 = shoppingCard['pen'];

var propertyName = 'books';
var propertyValue = shoppingCard[propertyName]
console.log(propertyName, propertyValue)

var properties = Object.keys(shoppingCard)
var value = Object.values(shoppingCard)
// console.log(penCount)


// set proterty value 

shoppingCard.mouse = 15;
console.log(shoppingCard)

shoppingCard['mouse'] = 29
console.log(shoppingCard)

shoppingCard[propertyName] = 34;
console.log(shoppingCard)