const checkNumber = (num) => {
  if (num > 0) return "Positive";
  if (num < 0) return "Negative";
  return "Zero";
};

console.log(checkNumber(5)); // "Positive"
console.log(checkNumber(-3)); // "Negative"
console.log(checkNumber(0)); // "Zero"
const secondMax = (arr) => {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr[1];
};

console.log(secondMax([10, 20, 30, 40])); // 30

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
function capitalizeWords(sentence) {
  return sentence.replace(/\b\w/g, (char) => char.toUpperCase());
}
console.log(capitalizeWords("hello world"));

console.log(longestWord("I love programming"));

console.log(findIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
const people = [
  { name: "Sahad", age: 25, gender: "male" },
  { name: "Riya", age: 22, gender: "female" },
  { name: "Alex", age: 30, gender: "male" },
  { name: "piya", age: 28, gender: "female" },
  { name: "David", age: 35, gender: "male" },
];
const frequency = (arr) => {
  return arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
};

console.log(frequency([1, 2, 2, 3, 3, 3])); // {1: 1, 2: 2, 3: 3}
function double(number) {
  const double = number * 2;
  return addFive(double);
}
function squareDoubleAddFive(number) {
  return square(number);
}

console.log(squareDoubleAddFive(5));

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(isBalanced("(())"));
function filterMale(peopleArray) {
  const male = peopleArray.filter((person) => person.gender !== "Female");
  const maleName = male.map((person) => person.name);
  return maleName;
}
const results = filterMale(persons);
console.log(result);
