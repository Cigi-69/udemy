// students score, total possible score
// 15/20 -> You got a C (75%)!
//A

let gradeCalc = function (studentScore, maxScore) {
    let total = Math.round((studentScore / maxScore) * 100);
    let grade;
    if (total < 90 && total >= 80) {
        grade = 'B';
    } else if (total < 80 && total >= 70) {
        grade = 'C';
    } else if (total < 70 && total >= 60) {
        grade = 'D';
    } else if (total < 60) {
        grade = 'F';
    } else {
        grade = 'A';
    }
    return `You got a ${grade} (${total}%)!`;
}

let result = gradeCalc(9, 20);
console.log(result);
