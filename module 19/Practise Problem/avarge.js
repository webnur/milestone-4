
function avarge(assignment1, assignment2, assignment3){

    var totalMark = assignment1 + assignment2 + assignment3;
    var avarge = totalMark / 3

    return avarge;
}

var firstAssignment = 58;
var secondAssignment = 58;
var thirdAssignment = 58;
var assignmentmark = avarge(firstAssignment, secondAssignment, thirdAssignment)
console.log(assignmentmark)