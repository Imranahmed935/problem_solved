// Task 1: Array Filtering and Mapping

const people = [
  { name: "Imran", age: 22, gender: "male" },
  { name: "Ayesha", age: 20, gender: "female" },
  { name: "Rahim", age: 25, gender: "male" },
  { name: "Fatema", age: 23, gender: "female" },
  { name: "Karim", age: 28, gender: "male" }
];

function getMaleNames(persons) {
  return persons
    .filter(person => person.gender !== "female")
    .map(person => person.name);
}

const result = getMaleNames(people);
// console.log(result); // Output: ["Imran", "Rahim", "Karim"]




// Task 2: Object Manipulation

const books = [
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { title: "Atomic Habits", author: "James Clear", year: 2018 },
  { title: "Deep Work", author: "Cal Newport", year: 2016 }
];

function getBookTitles(bookList) {
  return bookList.map(book => book.title);
}

const titles = getBookTitles(books);
// console.log(titles); // Output: ["The Alchemist", "Clean Code", "Atomic Habits", "Deep Work"]



// Task 3: Function Composition

function square(num) {
  return num * num;
}

function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}

function composedFunction(num) {
  return addFive(double(square(num)));
}

// console.log(composedFunction(3)); // (3² × 2) + 5 = 23



// Task 4: Sorting Objects

const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "BMW", model: "X5", year: 2020 },
  { make: "Ford", model: "Focus", year: 2012 }
];

function sortCarsByYear(carList) {
  return carList.sort((a, b) => a.year - b.year);
}

// console.log(sortCarsByYear(cars));


// Task 5: Find and Modify

const persons = [
  { name: "Imran", age: 22 },
  { name: "Rahim", age: 25 },
  { name: "Karim", age: 30 }
];

function updateAgeByName(arr, personName, newAge) {
  const person = arr.find(p => p.name === personName);
  if (person) {
    person.age = newAge;
  }
  return arr;
}

// console.log(updateAgeByName(persons, "Karim", 28));


// Task 6: Array Reduction

const numbers = [1, 2, 3, 4, 5, 6, 8];

function sumOfEvenNumbers(nums) {
  return nums.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    }
    return sum;
  }, 0);
}

// console.log(sumOfEvenNumbers(numbers));


// Task 7: Leap Year Checker

function isLeapYear(year) {
  if (year % 4 !== 0) return false;
  if (year % 100 !== 0) return true;
  return year % 400 === 0;
}

// console.log(isLeapYear(2024)); // true
// console.log(isLeapYear(2023)); // false
