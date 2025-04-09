function square(number) {
  const squared = number * number;
  return double(squared);
}
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
function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
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
function sortArry(cars) {
  const ascendingYear = cars.sort((a, b) => a.year - b.year);
  return ascendingYear;
}
function findIntersection(arr1, arr2) {
  return arr1.filter((num) => arr2.includes(num));
}
function mergeSorted(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeSorted([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]MM
