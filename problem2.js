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
