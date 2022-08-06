
function complexInterest(principalAmount, years){
    const interestPerYear = 10;
    const interest = (principalAmount * interestPerYear * years) / 100;
    return interest;
}

const amount = 10000;
const mainInterest = complexInterest(amount, 2)
console.log(mainInterest)