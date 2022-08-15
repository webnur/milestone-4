

const products = [
    {id: 1, name: 'walton mobile', price: 19000},
    {id: 2, name: 'xiomi phone', price: 13000},
    {id: 3, name: 'redmi 9 doul camera', price: 23000},
    {id: 4, name: 'dell laptop', price: 3400},
    {id: 5, name: 'Iphone 6 phone', price: 190000},
    {id: 6, name: 'macbook pro', price: 25000},
    {id: 7, name: 'htc phone', price: 56000},
]

// for(const product of products){
//     console.log(product.price)
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        console.log(product.name.ToLowerCase().includes(search.ToLowerCase()))
        if(product.name.includes(search)){
            matched.push(product)
        }
    }

    return matched;
}


const result = matchedProducts(products, 'phone')
console.log(result)