function sortArry(cars) {
  const ascendingYear = cars.sort((a, b) => a.year - b.year);
  return ascendingYear;
}
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
function square(number) {
  const squared = number * number;
  return double(squared);
}
