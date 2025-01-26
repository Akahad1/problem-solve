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

console.log(findIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
function longestWord(sentence) {
  return sentence
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
}
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
