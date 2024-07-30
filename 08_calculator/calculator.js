const add = function(num, num1) {
  let sum = num + num1;
	return sum;
};

const subtract = function(num, num1) {
  let sub = num -num1;
  return sub;
	
};

const sum = function(array) {
  let sumA = 0
  for(i = 0; i< array.length; i++){
   sumA += array[i]; 
  }
  return sumA;
	
};

const multiply = function(array) {
  let multi = 1;
  for(let i =0; i< array.length; i++){
    multi *= array[i];
    console.log(array[i]);
  }
  return multi; 
};
let m = 
multiply([1,2,3,4])
console.log(m)

const power = function(num2, num3) {
  let pow = Math.pow(num2 , num3);
	return pow;
};

const factorial = function(n) {
  if(n === 0){
    return 1;
  }
  let fact = 1;
  for(let i =1; i<= n; i++){
    fact *= i;
  }
	return fact;
};
let result = factorial(10);
console.log(result);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
