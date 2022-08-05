
function sumation (numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index]
        sum = sum + element
    }

    return sum;
}

function findOddNumber (numbers){
    const oddNumbers = []
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            oddNumbers.push(element)
        }

    }

    return oddNumbers;
}

const numbers =  [5, 7, 8, 10, 45, 30]
const odd =findOddNumber(numbers)
const add = sumation(odd)
console.log(add)