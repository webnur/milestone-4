
function isLeapYear (years) {
    const remainder = years % 4;

    if(remainder === 0){
        console.log('your year is leap year', years)
    }
    else {
        console.log('your year is not leap year')
    }
}

isLeapYear(2024)