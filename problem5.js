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
const persons = [
  { name: "Rakib", age: 20, gender: "male" },
  { name: "Ria", age: 20, gender: "Female" },
  { name: "Nokive", age: 20, gender: "male" },
  { name: "Shkive", age: 20, gender: "male" },
  { name: "Piya", age: 20, gender: "Female" },
];
function longestWord(sentence) {
  return sentence
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
}
function double(number) {
  const double = number * 2;
  return addFive(double);
}
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
function square(number) {
  const squared = number * number;
  return double(squared);
}
