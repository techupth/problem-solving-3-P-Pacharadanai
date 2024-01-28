// Exercise 1: Length of Last Word

const lengthOfLastWord = function (s) {
    const filterEmtyword = s.split(" ").filter((word) => word !== "");
    return filterEmtyword[filterEmtyword.length - 1].length;
};

const result1 = lengthOfLastWord("Hello World");
const result2 = lengthOfLastWord("   fly me   to   the moon  ");
const result3 = lengthOfLastWord("luffy is still joyboy");

console.log(result1); // 5
console.log(result2); // 4
console.log(result3); // 6
