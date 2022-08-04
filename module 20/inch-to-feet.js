
function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dataInches = 144;
const dataFeet = inchToFeet(dataInches)
console.log(dataFeet)