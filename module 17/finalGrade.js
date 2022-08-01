
var aGrade = 80;
var bGrade = 60;
var cGrade = 50;
var dgrade = 40;
var fGrade = 39;

var result = 64;

if(result >= 100){
    console.log('invalid number')
}
else if (result >= 80 && result <= 100) {
    console.log('tumi A+ paicho')
}

else if( result >= 60 && result <=100){
    console.log('tumi B+ paicho')
}
else if(result >= 50  && result <=100){
    console.log('tumi C+ paicho')
}
else if(result >= 40  && result <=100){
    console.log('tumi D+ paicho')
}
else {
    console.log('tumi babu fail korcho')
}