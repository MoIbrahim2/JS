class StudentManager {
  constructor() {
    // Application state
    this.students = [];

    this.nameInput = document.getElementById("name");
    this.gradeInput = document.getElementById("grade");
    this.list = document.getElementById("list");
    this.filterSelect = document.getElementById("filter");
    this.sortSelect = document.getElementById("sort");
    this.addButton = document.getElementById("add");
    this.nameErr = document.getElementById("nameErr");
    this.gradeErr = document.getElementById("gradeErr");

    this._initEventListeners();
    this.show();
  }

  #cap(s) {
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  }

  _initEventListeners() {
    this.addButton.onclick = () => this.addStudent();
    this.sortSelect.onchange = () => this.show();
    this.filterSelect.onchange = () => this.show();
  }

  // Handles the logic for adding a new student
  addStudent() {
    this.nameErr.innerHTML = this.gradeErr.innerHTML = "";

    let name = this.nameInput.value.trim();
    let grade = this.gradeInput.value * 1;

    if (!name) {
      this.nameErr.innerHTML = "Name required";
      return;
    }
    name = this.#cap(name);
    if (
      this.students.some((s) => s.name.toLowerCase() === name.toLowerCase())
    ) {
      this.nameErr.innerHTML = "Name already exists";
      return;
    }

    if (isNaN(grade) || grade < 0 || grade > 100) {
      this.gradeErr.innerHTML = "Grade must be 0–100, or not a valid number";
      return;
    }

    const dept = document.querySelector("input[name=dept]:checked").value;

    this.students.push({ name, grade, dept });
    this.nameInput.value = this.gradeInput.value = "";
    this.show();
  }

  show() {
    this.list.innerHTML = "";
    let arr = [...this.students];

    const filterValue = this.filterSelect.value;
    if (filterValue === "failed") {
      arr = arr.filter((s) => s.grade < 60);
    } else if (filterValue === "success") {
      arr = arr.filter((s) => s.grade >= 60);
    }

    const sortValue = this.sortSelect.value;
    if (sortValue === "name") {
      // Correctly sort by name alphabetically
      arr.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // Sort by grade descending
      arr.sort((a, b) => b.grade - a.grade);
    }

    arr.forEach((s) => {
      const row = document.createElement("div");
      row.className = "row " + s.dept;
      row.innerHTML = `${s.name} <span>${s.grade}</span>
                       <span class="trash">🗑️</span>`;

      row.querySelector(".trash").onclick = () => {
        this.students = this.students.filter((x) => x !== s);
        this.show();
      };
      this.list.appendChild(row);
    });
  }
}

new StudentManager();
