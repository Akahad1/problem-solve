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
function mergeSorted(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeSorted([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]MM
function modifyAgeByName(peopleArray, personName, newAge) {
  const person = peopleArray.find((p) => p.name === personName);

  if (person) {
    person.age = newAge;
  }

  return peopleArray;
}
const updatedPeople = modifyAgeByName(people, "piya", 32);
console.log(updatedPeople);
const uniqueNumbers = (arr) => {
  const freq = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(freq)
    .filter((key) => freq[key] === 1)
    .map(Number);
};

console.log(uniqueNumbers([1, 2, 2, 3, 4, 4])); // [1, 3]
