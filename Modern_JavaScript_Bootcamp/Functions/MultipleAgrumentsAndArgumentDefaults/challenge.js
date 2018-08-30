let getTip = function (bill, tip = .2) {
    let percent = tip * 100;
    let actualTip = bill * tip;
    return `A ${percent}% tip on $${bill} would be $${actualTip}`;
    // return `A ${tip * 100}% tip on $${bill} would be $${bill * tip}`;
}

let tip = getTip(40, .25);
console.log(tip);