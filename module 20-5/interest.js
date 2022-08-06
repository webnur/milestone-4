
function simpleInterest(principalAmount, years){

    const interestRate = 10;
    const interestAmount = (principalAmount * interestRate * years) /100 ;
    return interestAmount;
  

}

const loan = 100000;

const interest = simpleInterest(loan, 1)
console.log(interest)


// function simpleInterest1 (amout, year){
//     const munafa = 10;
//     const interests = (amout * year * munafa) / 100;
//     return interests
// }


// const amount = 10000;
// const mainInterest = simpleInterest1(amount, 1)
// console.log(mainInterest)
