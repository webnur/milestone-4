

function sumOfNumbers(number){

    let sum = 0;
    for(let i = 0; i < number; i++){
        sum = sum + i;
    }
    return sum;
}

const sum = sumOfNumbers(7)
console.log(sum)