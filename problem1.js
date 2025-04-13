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
function square(number) {
  const squared = number * number;
  return double(squared);
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
const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2012 },
  { make: "Chevrolet", model: "Camaro", year: 2016 },
  { make: "BMW", model: "3 Series", year: 2019 },
];

console.log(sortArry(cars));
