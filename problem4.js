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
