const fibonacci = function(n) {
    let num = Number(n);
    console.log(num)
    if(num < 0){
        return "OOPS";
    }
    if(num === 0){
        return 0
    }
    if(num === 1){
        return 1
    }
    let a =0, b=1
    for(let i =1; i<num; i++){
        let febb = a+b;
        a =b
        b= febb
     }
    return b;

};
let result = fibonacci("10");
console.log(result);

// Do not edit below this line
module.exports = fibonacci;
