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

//Level 2 – Searching and Replacing

const findAWord = (sentence, word) => {
  const exists = sentence.includes(word);
  console.log(`Does "${word}" exist in the sentence? ${exists}`);
};
const replaceAWord = (sentence, oldWord, newWord) => {
  const newSentence = sentence.replaceAll(oldWord, newWord);
  console.log(`Replaced sentence: ${newSentence}`);
};
const countOccurrences = (str, letter) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  console.log(`The letter "${letter}" appears ${count} times.`);
};
const startsOrEndsWith = (str, substring) => {
  const starts = str.startsWith(substring);
  const ends = str.endsWith(substring);
  console.log(
    `Starts with "${substring}": ${starts}, Ends with "${substring}": ${ends}`
  );
};
const removeSpaces = (sentence) => {
  const noSpaces = sentence.replaceAll(" ", "");
  console.log(`Sentence without spaces: ${noSpaces}`);
};

// Level 3 – Substrings and Formatting (don’t use arrays)

const extractDomain = (email) => {
  const atIndex = email.indexOf("@");
  const domain = email.substring(atIndex + 1);
  console.log(`Domain: ${domain}`);
};

const initialsGenerator = (fullName) => {
  const spaceIndex = fullName.indexOf(" ");
  const firstInitial = fullName.charAt(0);
  const lastInitial = fullName.charAt(spaceIndex + 1);
  console.log(`Initials: ${firstInitial}.${lastInitial}.`);
};

const reverseString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(`Reversed: ${reversed}`);
};

const palindromeChecker = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  const isPalindrome = str === reversed;
  console.log(`Is "${str}" a palindrome? ${isPalindrome}`);
};

const countVowels = (str) => {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  console.log(`Number of vowels in "${str}": ${count}`);
};

// Level 4 – Challenges

const titleCase = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  console.log(`Title Case: ${result}`);
};

const maskString = (phone) => {
  const masked =
    "*".repeat(phone.length - 4) + phone.substring(phone.length - 4);
  console.log(`Masked: ${masked}`);
};

const removeRepeated = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
  }
  console.log(`Without repeats: ${result}`);
};

const longestWord = (sentence) => {
  let maxLength = 0;
  let currentLength = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      currentLength++;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
      currentLength = 0;
    }
  }

  if (currentLength > maxLength) {
    maxLength = currentLength;
  }
  console.log(`Longest word length: ${maxLength}`);
};

// Example calls (uncomment to test)
// lengthFinder();
// uppercaseConverter("hello world");
// lowercaseConverter("HELLO WORLD");
// characterExtractor();
// concatenationPractice();
// removePartOfString();

//Level 2 examples
findAWord("Hello world, how are you?", "world");
replaceAWord("I love apples", "apples", "oranges");
countOccurrences("hello world", "l");
startsOrEndsWith("JavaScript is fun", "Java");
removeSpaces("Hello world, how are you?");

// Level 3 examples
extractDomain("user@example.com");
initialsGenerator("John Smith");
reverseString("hello");
palindromeChecker("level");
countVowels("hello world");

// Level 4 examples
titleCase("hello world");
maskString("01065082666");
removeRepeated("aabbcc");
longestWord("The quick brown fox jumps over the lazy dog");
