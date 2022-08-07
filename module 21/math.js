const result = Math.pow(3, 5)
// console.log(result)

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);

if(gap < 5){
    console.log('you guys can be friends')
}
else{
    console.log('you guys stay apart')
}


//---------------------
//
//-----------------------------------


const number = 2.44503;

const fullNumber = Math.round(number)
// console.log(fullNumber)

const reslult2 = Math.ceil(2.0001)
const reslult3 = Math.floor(456.999)
// console.log(reslult3)

//----------------------------
// math.random

const random = Math.round(Math.random() * 100);
// console.log(random)

for(let i = 0; i < 20; i++){
    const random = Math.round(Math.random() * 6);
    console.log(random)
}