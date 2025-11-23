const getStudentGrades = () => {
  const grades = [];
  for (let i = 0; i < 3; i++) {
    const grade = prompt(`Enter grade for student ${i + 1}:`);
    grades.push(grade);
  }
  console.log("Grades:", grades);
};
const getStudentGradesSummation = () => {
  const grades = [];
  let summation = 0;
  for (let i = 0; i < 3; i++) {
    const grade = prompt(`Enter grade for student ${i + 1}:`);
    grades.push(parseInt(grade));
  }
  for (let i in grades) {
    summation += grades[i];
  }
  console.log("Grades:", summation);
};

const getStudentGradesUserInput = (studentrades) => {
  let summation = 0;
  const students = prompt("How may students do we have ");
  const grades = [];
  for (let i = 0; i < students * 1; i++) {
    const grade = prompt(`Enter grade for student ${i + 1}:`);
    grades.push(parseInt(grade));
  }
  for (let i in grades) {
    summation += grades[i];
  }
  console.log("Grades:", summation);
};

const getStudentGradesUserInputWithAlert = () => {
  const students = prompt("How many students do we have?");
  const numStudents = parseInt(students);
  if (numStudents < 2 || numStudents > 10 || isNaN(numStudents)) {
    alert("Error: Number of students must be between 2 and 10.");
    return; // Stop execution, do not calculate or display summation
  }
  let summation = 0;
  const grades = [];
  for (let i = 0; i < numStudents; i++) {
    let grade = prompt(`Enter grade for student ${i + 1}:`);
    while (isNaN(grade) || grade > 100 || grade < 0) {
      grade = prompt(
        `Enter a correct grade for student, should be between 0-100 and numeric value ${
          i + 1
        }:`
      );
    }
    grades.push(parseInt(grade));
  }
  for (let i in grades) {
    summation += grades[i];
  }
  console.log("Grades:", summation);
};

// getStudentGrades();
// getStudentGradesSummation();
// getStudentGradesUserInput();
getStudentGradesUserInputWithAlert();
