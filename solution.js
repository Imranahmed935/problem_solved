
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
