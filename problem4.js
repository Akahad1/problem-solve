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
const secondMax = (arr) => {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr[1];
};

console.log(secondMax([10, 20, 30, 40])); // 30

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(isBalanced("(())"));
function isBalanced(str) {
  const stack = [];
  for (let char of str) {
    if (char === "(") stack.push(char);
    else if (char === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}
function filterMale(peopleArray) {
  const male = peopleArray.filter((person) => person.gender !== "Female");
  const maleName = male.map((person) => person.name);
  return maleName;
}
const results = filterMale(persons);
console.log(result);
function sortArry(cars) {
  const ascendingYear = cars.sort((a, b) => a.year - b.year);
  return ascendingYear;
}
function squareDoubleAddFive(number) {
  return square(number);
}

console.log(squareDoubleAddFive(5));
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
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
