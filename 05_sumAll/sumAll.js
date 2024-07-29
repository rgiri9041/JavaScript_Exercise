const sumAll = function (num, num1) {
    let sum = 0;

    if (typeof num !== 'number' || typeof num1 !== 'number') {
        return "ERROR";
    }
    else if (num < 0 || num1 < 0) {
        return "ERROR";
    }
    else if (num % 1 !== 0 || num1 % 1 !== 0) {
        return "ERROR";
    }
    if (num > num1) {
        [num, num1] = [num1,num]
    }
    for (let i = num; i <= num1; i++) {
        sum += i;

    }
    return sum;
};  

// Do not edit below this line
module.exports = sumAll;
