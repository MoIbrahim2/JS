//8
student0 = {
  fullName: {
    firstName: "mohamed",
    lastName: "ahmed",
  },
  age: 17,
  toString() {
    return `${this.fullName.firstName} ${this.fullName.lastName}`; // Fixed: return a string instead of an object
  },
};
student1 = {
  fullName: {
    firstName: "omar",
    lastName: "moheb",
  },
  age: 40,
};
student2 = {
  fullName: {
    firstName: "khaled",
    lastName: "yassen",
  },
  age: 32,
};
const students = [student0, student1, student2];

const toPascalCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

//Create function to register students data through prompts
const registerStudent = () => {
  const firstName = prompt("enter student first name");
  const lastName = prompt("enter student last name");
  const age = prompt("enter student age name") * 1;
  const email = prompt("enter student email");
  while (!email.includes("@")) {
    alert("please enter valid email");
    email = prompt("enter student email");
  }
  return {
    fullName: { firstName, lastName },
    age,
    email,
  };
};

//Array of students
const pushIntoArray = () => {
  const students = [];
  const numberOfStudents =
    prompt("enter the number of students that you want to save") * 1;
  for (let i = 0; i < numberOfStudents; i++) {
    students[i] = registerStudent();
  }
  return students;
};

//Oldest student name
const pushIntoArrayAndFindOldestStudent = () => {
  const students = [];
  const numberOfStudents =
    prompt("enter the number of students that you want to save") * 1;
  for (let i = 0; i < numberOfStudents; i++) {
    students[i] = registerStudent();
  }

  students.sort((a, b) => {
    a.age - b.age;
  });

  return students[0].fullName;
};

//Pascal
const returnAfterPascal = () => {
  return students.map((item) => {
    item.fullName.firstName = toPascalCase(item.fullName.firstName);
    item.fullName.lastName = toPascalCase(item.fullName.lastName);
    return item;
  });
};

//find all students with ages plus 20
const returnAllStudentsWithAgesPlus20 = () => {
  return students.filter((item) => item.age > 20);
};
//get the average age of all students
const averageAge = () => {
  let totalAge = 0;
  for (let i of students) {
    totalAge += i.age;
  }
  return totalAge / students.length;
};

//Sort students ascending by firstName ,(if you have a match in firstName) then sort

const sortStudents = () => {
  return students.sort((a, b) => {
    if (a.fullName.firstName > b.fullName.firstName) {
      return 1;
    } else if (a.fullName.firstName < b.fullName.firstName) return -1;
    else {
      if (a.fullName.lastName > b.fullName.lastName) {
        return 1;
      } else if (a.fullName.lastName < b.fullName.lastName) return -1;
    }
  });
};

//9
// console.log(students[1] + "");

//10
// console.log(students[0] + "");

//11
// console.log(JSON.stringify(students));

console.log(registerStudent());
// console.log(pushIntoArray());
// console.log(returnAfterPascal());
// console.log(averageAge());
// console.log(returnAllStudentsWithAgesPlus20());
// console.log(sortStudents());
