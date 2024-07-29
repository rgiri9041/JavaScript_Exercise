const removeFromArray = function(array, ...rests) {
    return array.filter(item => !rests.includes(item))    
};


// Do not edit below this line
module.exports = removeFromArray;
