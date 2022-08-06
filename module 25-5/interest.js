
function simpleInterest(principalAmount, years){

    const interestPerYear = 10;
    const interestAmount = principalAmount / interestPerYear;
    const totalInterest = interestAmount * years;
    return totalInterest;

}

const loan = 100000;

const interest = simpleInterest(loan, 2)
console.log(interest)


