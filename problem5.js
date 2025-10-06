function sortArry(cars) {
  const ascendingYear = cars.sort((a, b) => a.year - b.year);
  return ascendingYear;
}
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
function filterMale(peopleArray) {
  const male = peopleArray.filter((person) => person.gender !== "Female");
  const maleName = male.map((person) => person.name);
  return maleName;
}
const results = filterMale(persons);
console.log(result);
function squareDoubleAddFive(number) {
  return square(number);
}

console.log(squareDoubleAddFive(5));
