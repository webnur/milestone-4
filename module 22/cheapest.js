
const phones = [
    {name: 'samsung', camera: 12, storage: '32gb', price: 23000, color: 'silver'},
    {name: 'walton', camera: 15, storage: '62gb', price: 20000, color: 'black'},
    {name: 'xiomi', camera: 20, storage: '120gb', price: 25000, color: 'golden'},
    {name: 'nokia', camera: 8, storage: '16gb', price: 18000, color: 'parple'},
    {name: 'htc', camera: 12, storage: '28gb', price: 28000, color: 'blue'},
    {name: 'tecno', camera: 56, storage: '62gb', price: 29000, color: 'green'}
]

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        
       if(phone.price < cheapest.price){
        cheapest = phone;
       }
    }

    return cheapest;
}

const mySelection = cheapestPhone(phones)
console.log(mySelection)