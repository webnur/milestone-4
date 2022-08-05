

// function findLeapYear(years){
    
//     let leapYear = []
//     for(let i = 0; i <= years.length; i++){

//         let index = i;
//         let element = years[index]
//         if(element % 4 === 0){
//             leapYear.push(element)
//         }
//     }

//     return leapYear;
// }

// const years = [2023, 2024, 2025, 2028, 2030];

// const leapYears = findLeapYear(years)
// console.log(leapYears)



function findLeapYear (years){
    let leapYear = [];
    for(let i = 0; i <= years.length; i++){

        const index = i;
        const element = years[index]
        if(element % 4 === 0){
            leapYear.push(element)
        }

        // if(years[i] % 4 === 0){
        //     leapYear.push(years[i])
        // }
    }

    return leapYear;
}
const years = [2023, 2024, 2025, 2028, 2030];

const leapYears = findLeapYear(years)
console.log(leapYears)

