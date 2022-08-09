
function paperRequirements (firstBook, secondBook, thridBook) {
    const firstBookPaper = 100;
    const secondBookPaper = 200;
    const thirdBookPaper = 300;

    const firstTotalPaper = firstBookPaper * firstBook;
    const secondTotalPaper = secondBookPaper * secondBook;
    const thirdTotalPaper = thirdBookPaper * thridBook;

    const totalPaper =  firstBookPaper + secondTotalPaper + thirdTotalPaper;
    return totalPaper;
}

let totalPapers = paperRequirements(1, 1, 1)

console.log(totalPapers)