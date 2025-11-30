//1
const imagesCollection = document.images;
console.log("Images via collection:", imagesCollection);

const imagesMethod = document.getElementsByTagName("img");
console.log("Images via getElementsByTagName:", imagesMethod);

const citySelect = document.querySelector('select[name="City"]');

console.log("City options:", citySelect.options);

const tables = document.getElementsByTagName("table");
console.log("Second table rows:", tables[1].rows);

const elementsWithClasses = document.getElementsByClassName("fontBlue bGrey");
console.log("Elements with fontBlue and bGrey:", elementsWithClasses);

//2
const secondTable = tables[1];
const firstAnchor = secondTable.querySelector("a");
firstAnchor.href = "training.com";
firstAnchor.textContent = "Training";

for (let img of imagesMethod) {
  img.style.border = "solid pink 2px";
}
const checkedCheckboxes = document.querySelectorAll(
  'input[type="checkbox"]:checked'
);
checkedCheckboxes.forEach((checkbox) => {
  alert(checkbox.value);
});

const exampleElement = document.getElementById("example");
exampleElement.style.backgroundColor = "pink";

//3
setInterval(() => {
  document.title = new Date().toLocaleString();
}, 1000);

//4
function startSliding(imgObject) {
  let i = 0;
  const timerID = setInterval(() => {
    i = (i % 8) + 1;
    imgObject.src = `images/${i}.jpg`;
  }, 1000);
  return timerID;
}

function stopSliding(timerID) {
  clearInterval(timerID);
}
