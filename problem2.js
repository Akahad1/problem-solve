function double(number) {
  const double = number * 2;
  return addFive(double);
}
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
function addFive(number) {
  const add5 = number + 5;
  return add5;
}
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "Gatsby", author: "George Orwell", year: 1949 },
  { title: "Moby Dick", author: "Herman Melville", year: 1851 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

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
function findIntersection(arr1, arr2) {
  return arr1.filter((num) => arr2.includes(num));
}
