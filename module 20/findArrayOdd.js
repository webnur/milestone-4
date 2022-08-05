
function getSomeOFAnArray(numbers){

    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index]
        sum = sum + element
        // console.log(index, element, sum)
       
    }
    // console.log(sum)
    return sum;
}


function getOddNumberAnArray(numbers){

    const oddNumbers = []
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[i]
        if(element % 2 !== 0){
            console.log(index, element)
            oddNumbers.push(element)
        }
       
    }
    return oddNumbers;
}

const myNumbers = [14, 50, 19, 42, 54, 65, 11, 33, 32];

const oddNumbers = getOddNumberAnArray(myNumbers)
console.log(oddNumbers)

const oddNumberSum = getSomeOFAnArray(oddNumbers)
console.log('odd number sum ',oddNumberSum)