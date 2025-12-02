let students = [];

const nameInput = document.getElementById("name");
const gradeInput = document.getElementById("grade");
const list = document.getElementById("list");

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function show() {
  list.innerHTML = "";
  let arr = [...students];

  // filter
  let f = document.getElementById("filter").value;
  if (f === "failed") arr = arr.filter((s) => s.grade < 60);
  else if (f === "success") arr = arr.filter((s) => s.grade >= 60);

  // sort
  let srt = document.getElementById("sort").value;
  if (srt === "name") arr.sort((a, b) => b.name - a.name);
  else arr.sort((a, b) => b.grade - a.grade);

  arr.forEach((s) => {
    const row = document.createElement("div");
    row.className = "row " + s.dept;
    row.innerHTML = `${s.name} <span>${s.grade}</span>
                     <span class="trash">🗑️</span>`;
    row.querySelector(".trash").onclick = () => {
      students = students.filter((x) => x !== s);
      show();
    };
    list.appendChild(row);
  });
}

// validation
document.getElementById("add").onclick = () => {
  const nameErr = document.getElementById("nameErr");
  const gradeErr = document.getElementById("gradeErr");
  nameErr.innerHTML = gradeErr.innerHTML = "";

  let name = nameInput.value.trim();
  let grade = gradeInput.value * 1;

  if (!name) return (nameErr.innerHTML = "Name required");
  name = cap(name);
  if (students.some((s) => s.name.toLowerCase() === name.toLowerCase()))
    return (nameErr.innerHTML = "Name already exists");

  if (isNaN(grade) || grade < 0 || grade > 100)
    return (gradeErr.innerHTML = "Grade must be 0–100, or not valid number");

  const dept = document.querySelector("input[name=dept]:checked").value;

  students.push({ name, grade, dept });
  nameInput.value = gradeInput.value = "";
  show();
};

document.getElementById("sort").onchange = () => {
  show();
};
document.getElementById("filter").onchange = () => {
  show();
};

show();
