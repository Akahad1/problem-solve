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

function addFive(number) {
  const add5 = number + 5;
  return add5;
}
function filterMale(peopleArray) {
  const male = peopleArray.filter((person) => person.gender !== "Female");
  const maleName = male.map((person) => person.name);
  return maleName;
}
const result = filterMale(persons);
console.log(result);
