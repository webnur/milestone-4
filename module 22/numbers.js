// function myNumbers (numbers){
    
//     let posetiveNumber = []
//     for(let i =  0; i <= numbers.length; i++){
//         let number = numbers[i];
//         if(number % 2 === 0 && number >= 0 || number % 2 !== 0){
//             positonNumber.push(number);
//             if(number % 2 !== 0){
//                 break;
//             }
//         }
//     }

//     return posetiveNumber;
// }

// let allNumbers = [10, 12, 18, 15, 20, 25, 14, 13, 7, 6, 7, 9]
// let relult = myNumbers(allNumbers)
// console.log(relult)


function myNumbers(numbers) {
    let posetiveNum = [];
    for (i = 0; i <= numbers.length; i++) {
        var number = numbers[i];
        if (number > 0) {  
            posetiveNum.push(number);
            
        }
        else if(number < 0){
            break;
        }
    }
    return posetiveNum;

}


let allNumbers = [10, 6, 15, 20, -1, 14, 13, -2, 6, 9, 0];
let result = myNumbers(allNumbers);
console.log(result);