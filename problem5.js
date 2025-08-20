function filterMale(peopleArray) {
  const male = peopleArray.filter((person) => person.gender !== "Female");
  const maleName = male.map((person) => person.name);
  return maleName;
}
const results = filterMale(persons);
console.log(result);
function findIntersection(arr1, arr2) {
  return arr1.filter((num) => arr2.includes(num));
}
function squareDoubleAddFive(number) {
  return square(number);
}

console.log(squareDoubleAddFive(5));
