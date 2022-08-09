
function add(num1, num2){

    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        console.log('please enter a number');
    }
    else{
        return num1 + num2;
    }

}

const result = add(12, 45)
// console.log(result)

function multipiction(num1, num2){
    return num1 * num2;
}

const output = multipiction(12, 43)
console.log(output)