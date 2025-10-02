function squareDoubleAddFive(number) {
  return square(number);
}

console.log(squareDoubleAddFive(5));
function sortArry(cars) {
  const ascendingYear = cars.sort((a, b) => a.year - b.year);
  return ascendingYear;
}
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(isBalanced("(())"));
