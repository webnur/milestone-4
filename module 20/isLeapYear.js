
function isLeapYear (years) {
    const remainder = years % 4;

    // if(remainder === 0){
    //     console.log('your year is leap year', years)
    // }
    // else {
    //     console.log('your year is not leap year')
    // }

    if(remainder === 0){
        return true;
    }
    else {
        return false;
    }
}

const isMyYearLeapYear = isLeapYear(2022);
console.log('my year is: ', isMyYearLeapYear)

const IsHerYearLeapYear = isLeapYear(2024);
console.log('her year is:', IsHerYearLeapYear)