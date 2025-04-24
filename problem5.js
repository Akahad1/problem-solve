function booksTitel(bookArry) {
  const newArry = bookArry.map((book) => book.title);
  return newArry;
}

const result = booksTitel(books);
console.log(result);
const people = [
  { name: "Sahad", age: 25, gender: "male" },
  { name: "Riya", age: 22, gender: "female" },
  { name: "Alex", age: 30, gender: "male" },
  { name: "piya", age: 28, gender: "female" },
  { name: "David", age: 35, gender: "male" },
];
const frequency = (arr) => {
  return arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
};

console.log(frequency([1, 2, 2, 3, 3, 3])); // {1: 1, 2: 2, 3: 3}
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
