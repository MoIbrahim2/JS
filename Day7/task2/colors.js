const container = document.getElementById("container");

function makeClickable(box) {
  box.addEventListener("click", function handler() {
    box.removeEventListener("click", handler);
    const clone = box.cloneNode();
    box.style.background = "black";
    makeClickable(clone);
    container.appendChild(clone);
  });
}

document.querySelectorAll(".box").forEach((box) => {
  makeClickable(box);
});
