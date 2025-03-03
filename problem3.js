function square(number) {
  const squared = number * number;
  return double(squared);
}
function filterMale(peopleArray) {
  const male = peopleArray.filter((person) => person.gender !== "Female");
  const maleName = male.map((person) => person.name);
  return maleName;
}
const result = filterMale(persons);
console.log(result);
