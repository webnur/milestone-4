
const shoppingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 1100},
    {name: 'pant', price: 3200},
    {name: 'panjabi', price: 2100},
    {name: 'rumal', price: 230},
    {name: 'belt', price: 300},
]

function totalCost (products){
    let sum = 0;
    for(let i =0; i < products.length; i++){
        const product = products[i]
        // console.log(product.price)
        sum = sum + product.price;
    }

    return sum;
}

const expense =  totalCost(shoppingCart);
console.log('total expense', expense)