const secondMax = (arr) => {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr[1];
};

console.log(secondMax([10, 20, 30, 40])); // 30

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]
function sortArry(cars) {
  const ascendingYear = cars.sort((a, b) => a.year - b.year);
  return ascendingYear;
}
function square(number) {
  const squared = number * number;
  return double(squared);
}
const checkNumber = (num) => {
  if (num > 0) return "Positive";
  if (num < 0) return "Negative";
  return "Zero";
};

console.log(checkNumber(5)); // "Positive"
console.log(checkNumber(-3)); // "Negative"
console.log(checkNumber(0)); // "Zero"
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2012 },
  { make: "Chevrolet", model: "Camaro", year: 2016 },
  { make: "BMW", model: "3 Series", year: 2019 },
];

console.log(sortArry(cars));
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(isBalanced("(())"));
function isBalanced(str) {
  const stack = [];
  for (let char of str) {
    if (char === "(") stack.push(char);
    else if (char === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}
function findIntersection(arr1, arr2) {
  return arr1.filter((num) => arr2.includes(num));
}
