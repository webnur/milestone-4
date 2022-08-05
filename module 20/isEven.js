
function isEven(number){
   
    // const remainder = number %2;
    // if(remainder === 0){
    //     console.log('number is even')
    // }else {
    //     console.log('number is odd')
    // }
    const remainder = number %2;
    if(remainder === 0){
        return true;
    }else {
        return false;
    }
}

// isEven(23)

const myNumberIseven = isEven(232);
console.log(myNumberIseven);

const herNumberIsEven = isEven(303);
console.log(herNumberIsEven)