// Exercise 2: Single Number

const singleNumber = function (nums) {
    return (findNumber = nums.find((num) => nums.indexOf(num) === nums.lastIndexOf(num)));
};

const result1 = singleNumber([2, 2, 1]);
const result2 = singleNumber([4, 1, 2, 1, 2]);
const result3 = singleNumber([1]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 1
