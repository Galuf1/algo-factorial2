const factorial = function(num) {
    // let array = []
    // for (let i = 1; i < num + 1; i++){
    //     array.push(i)
    // }
    // let result = array.reduce((a,b) => a*b)
    // return result
    if (num === 1) {
        return num
    } else if (num > 1) {
        return factorial(num-1)*num
    }

    
};
module.exports.factorial = factorial;
// 8*7
//     7*6
console.log(factorial(8))