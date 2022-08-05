
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

const myNumbers = [20, 40, 42, 54, 60]
const totalNumber = getSomeOFAnArray(myNumbers);
console.log(totalNumber)