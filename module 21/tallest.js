
function maxInArray(numbers){

    let lergest = numbers[0]
    for(let i = 0; i <numbers.length; i++){
        const index = i;
        const element = numbers[index]
        // console.log(element)
        if(element > lergest){
            lergest = element;
        }

    }
    
    return lergest;

}

const heights = [167, 190, 120, 165, 137]

const tallest = maxInArray(heights);
console.log('tallest person is: ', tallest)