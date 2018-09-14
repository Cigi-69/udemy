// students score, total possible score
// 15/20 -> You got a C (75%)!
//A

// Original file
// const gradeCalc = function (studentScore, maxScore) {
//     const total = Math.round((studentScore / maxScore) * 100);
//     let grade;
//     if (total < 90 && total >= 80) {
//         grade = 'B';
//     } else if (total < 80 && total >= 70) {
//         grade = 'C';
//     } else if (total < 70 && total >= 60) {
//         grade = 'D';
//     } else if (total < 60) {
//         grade = 'F';
//     } else {
//         grade = 'A';
//     }
//     return `You got a ${grade} (${total}%)!`;
// }

// const result = gradeCalc(9, 20);
// console.log(result);


// Challenge - using try/catch
const gradeCalc = (studentScore, maxScore) => {
    if (typeof studentScore !== 'number' || typeof maxScore !== 'number') {
        return Error('Both argument has to be numbers');
    }

    const total = Math.round((studentScore / maxScore) * 100);
    let grade;
    if (total >= 90) {
        grade = 'A';
    } else if (total >= 80) {
        grade = 'B';
    } else if (total >= 70) {
        grade = 'C';
    } else if (total >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return `You got a ${grade} (${total}%)!`;
}

try {
    const result = gradeCalc('test', 100);
    console.log(result);
} catch (e) {
    console.log(e.message);
}
