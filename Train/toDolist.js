// Get references to the HTML elements
const listContainer = document.getElementById("list-container");
const input = document.getElementById("input");
const button = document.getElementById("btn");

const addToDo = (input_value) => {
  // 1. Don't add an item if the input is empty
  if (!input_value.trim()) {
    return;
  }

  // 2. Create the main container for the to-do item
  const div = document.createElement("div");
  div.classList.add("toDo");

  // 3. Create a span to hold the text, so it doesn't get overwritten
  const textSpan = document.createElement("span");
  textSpan.textContent = input_value;

  // 4. Create the remove button
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("removeBtn");
  removeBtn.textContent = "×"; // A nice 'X' for the remove button

  // 5. Add an event listener to the remove button
  removeBtn.onclick = () => {
    // Use the modern .remove() method on the div to delete it
    div.remove();
  };

  // 6. Append the text and the button to the main to-do div
  div.appendChild(textSpan);
  div.appendChild(removeBtn);

  // 7. Append the new to-do item to the list container
  listContainer.appendChild(div);
};

// Main event listener for the "Add" button
button.onclick = (e) => {
  e.preventDefault(); // Prevent the form from refreshing the page
  const input_value = input.value;
  input.value = ""; // Clear the input field after adding
  addToDo(input_value);
};
