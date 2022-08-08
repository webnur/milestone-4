
const shoppingCart = [
    {name: 'shoe', price: 1200 ,quantity: 5},
    {name: 'shirt', price: 1100 ,quantity: 6},
    {name: 'pant', price: 3200 ,quantity: 7},
    {name: 'panjabi', price: 2100 ,quantity: 9},
    {name: 'rumal', price: 230 ,quantity: 11},
    {name: 'belt', price: 300 ,quantity: 12}, 
]

function totalCost (products){
    let sum = 0;
    for(let i =0; i < products.length; i++){
        const product = products[i]
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }

    return sum;
}

const expense =  totalCost(shoppingCart);
console.log('total expense', expense)