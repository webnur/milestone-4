var shoppingCard = {
    books: 3,
    sunGlass: 1,
    keyborad: 5,
    mouse: 1,
    pen: 25

}

var properties = Object.keys(shoppingCard)
var values = Object.values(shoppingCard)

for(var i = 0; i < properties.length; i++){
    console.log(properties[i])
}