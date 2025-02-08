function square(number) {
  const squared = number * number;
  return double(squared);
}
function double(number) {
  const double = number * 2;
  return addFive(double);
}

function addFive(number) {
  const add5 = number + 5;
  return add5;
}

function squareDoubleAddFive(number) {
  return square(number);
}

console.log(squareDoubleAddFive(5));

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(isBalanced("(())"));
function longestWord(sentence) {
  return sentence
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
}
