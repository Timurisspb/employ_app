let arr = ['f', '53', '5ed2j', 'a1b2c3'];
let newData = arr.reduce((prev,current, index, array) => prev + current);
let newD = newData.split('');
let onlyNums = newD.filter((value, index, array) => typeof value === 'string' && !isNaN(value))
    .reduce((a, b, index, array) => a + b)
let onlyString = newD.filter((value, index, array) => typeof value === 'string' && isNaN(value))
    .reduce((a, b, index, array) => a + b)
console.log(onlyString);
console.log(onlyNums);



let nums = [10,20,30];
nums.forEach((value, index) => console.log(`Index ${index + 1} and element is ${value}`))