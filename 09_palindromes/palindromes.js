const palindromes = function (str) {
    let given = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let reverse = given.split('').reverse().join('');
    return given === reverse

};

// Do not edit below this line
module.exports = palindromes;
