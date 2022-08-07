
/* 
fixed: per item wood requirments
1. chair --> 3cft;
2. table --> 10cft;
3. bed --> 50 cft;

*/


function woodCalculator(chairQuantity, tableQuantity, bedQuantity){

    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = perChairWood * chairQuantity;
    const tableWood = perTableWood * tableQuantity;
    const bedWood = perBedWood * bedQuantity;


    const total = chairWood + tableWood + bedWood;

    return total;

}

const totalWood = woodCalculator(2, 2, 5)

console.log('',totalWood)