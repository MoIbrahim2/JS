const lengthFinder = () => {
  const word = prompt("Enter a word:");
  console.log(`The word "${word}" has ${word.length} characters.`);
};

const uppercaseConverter = (str) => {
  const upperStr = str.toUpperCase();
  console.log(`Uppercase: ${upperStr}`);
};
const lowercaseConverter = (str) => {
  const lowerStr = str.toLowerCase();
  console.log(`Lowercase: ${lowerStr}`);
};
const characterExtractor = () => {
  const word = prompt("Enter a word:");
  const first = word.charAt(0);
  const middle = word.charAt(Math.floor(word.length / 2));
  const last = word.charAt(word.length - 1);
  console.log(`First: ${first}, Middle: ${middle}, Last: ${last}`);
};
const concatenationPractice = () => {
  const firstName = prompt("Enter your first name:");
  const lastName = prompt("Enter your last name:");
  console.log(`Hello, ${firstName} ${lastName}!`);
};
const removePartOfString = () => {
  const fullName = prompt("Enter your full name:");
  const modifiedName = fullName.substring(0, fullName.length - 5);
  console.log(`Modified name: ${modifiedName}`);
};

// lengthFinder();
// uppercaseConverter("hello world");
// lowercaseConverter("HELLO WORLD");
// characterExtractor();
// concatenationPractice();
// removePartOfString();
