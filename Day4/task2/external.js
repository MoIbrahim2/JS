const toPascalCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

const names = ["sara", "ali", "noha"];
const ages = [20, 22, 19];
const combineAgesNames = (names, ages) => {
  const result = [];
  for (let i in names) {
    result.push({ name: names[i], age: ages[i] });
  }
  return result;
};

const countFrequency = (arr) => {
  const result = {};
  arr.forEach((item) => {
    result[item] = (result[item] || 0) + 1;
  });
  return result;
};

const groupGrade = (arr) => {
  const result = { A: [], B: [], C: [], D: [], F: [] };
  arr.forEach((item) => {
    if (item >= 90) {
      result.A.push(item);
    } else if (item >= 80) {
      result.B.push(item);
    } else if (item >= 70) {
      result.C.push(item);
    } else if (item >= 60) {
      result.D.push(item);
    } else {
      result.F.push(item);
    }
  });
  return result;
};

const convertStudentsNamesToPascal = (arr) => {
  arr = arr.map((value) => {
    value.name = toPascalCase(value.name);
    return value;
  });
  return arr;
};

const sortStudentsByGradeDescending = (students) => {
  return students.sort((a, b) => b.grade - a.grade);
};

const findHighestGradeStudent = (students) => {
  return students.reduce((max, student) =>
    student.grade > max.grade ? student : max
  );
};
const filterStudentsByGrade = (students) => {
  return students.filter((student) => student.grade >= 60);
};

const stringifyStudents = (students) => {
  return students.map((student) => `${student.name} ${student.grade}`);
};

const countStudentsWithLongNames = (students) => {
  return students.filter((student) => student.name.length >= 4).length;
};
const createBook = (title, author, year, price) => {
  return {
    title,
    author,
    year,
    price,
    returnBookDetails() {
      return { title, author, year, price };
    },
    isClassic() {
      if (new Date().getFullYear() - year > 20) {
        return true;
      }
      return false;
    },
    applyDiscount(percent) {
      price = price - price * percent;
    },
  };
};

// console.log(combineAgesNames(names, ages));
console.log(countFrequency(["a", "b", "a", "c", "b", "a"]));
// console.log(groupGrade([95, 82, 60, 45, 77, 88]));
// console.log(groupGrade([95, 82, 60, 45, 77, 88]));
// console.log(
//   convertStudentsNamesToPascal([
//     { name: "ahmed", grade: 90 },
//     { name: "mona", grade: 80 },
//   ])
// );
// console.log(
//   sortStudentsByGradeDescending([
//     { name: "Ali", grade: 70 },
//     { name: "Sara", grade: 95 },
//   ])
// );
// console.log(
//   findHighestGradeStudent([
//     { name: "Ali", grade: 70 },
//     { name: "Sara", grade: 95 },
//   ])
// );
// console.log(
//   filterStudentsByGrade([
//     { name: "Ali", grade: 55 },
//     { name: "Sara", grade: 95 },
//     { name: "Mona", grade: 62 },
//   ])
// );
// console.log(
//   stringifyStudents([
//     { name: "Ali", grade: 70 },
//     { name: "Sara", grade: 95 },
//   ])
// );
// console.log(
//   countStudentsWithLongNames([
//     { name: "Ali" },
//     { name: "Mona" },
//     { name: "Zyad" },
//   ])
// );
// const books = [
//   createBook("1984", "George Orwell", 1949, 15.99),
//   createBook("To Kill a Mockingbird", "Harper Lee", 1960, 12.99),
//   createBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, 10.99),
//   createBook("Modern Book", "Author X", 2020, 20.0),
// ];

// console.log("Book Details:");
// books.forEach((book, index) => {
//   console.log(`Book ${index + 1}:`, book.returnBookDetails());
// });

// console.log("\nIs Classic:");
// books.forEach((book, index) => {
//   console.log(`Book ${index + 1} (${book.title}): ${book.isClassic()}`);
// });

// const currentYear = new Date().getFullYear();
// books.forEach((book) => {
//   if (currentYear - book.year > 10) {
//     book.applyDiscount(0.1);
//   }
// });
// // Print updated details after discount
// console.log("\nUpdated Book Details after Discount:");
// books.forEach((book, index) => {
//   console.log(`Book ${index + 1}:`, book.returnBookDetails());
// });
