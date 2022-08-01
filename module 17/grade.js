
var aGrade = 80;
var bGrade = 60;
var cGrade = 50;
var dgrade = 40;
var fGrade = 39;

var result = 120;

if (result >= aGrade && aGrade <= 100) {
    console.log('tumi A+ paicho')
}
else if( result >= bGrade && result <= aGrade){
    console.log('tumi B+ paicho')
}
else if(result >= cGrade && result <= bGrade){
    console.log('tumi C+ paicho')
}
else if(result >= dgrade && result <= cGrade){
    console.log('tumi D+ paicho')
}
else {
    console.log('tumi babu fail korcho')
}