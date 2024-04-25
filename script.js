let count = 0;
let counter = document.getElementById("counter");
function dec() {
  counter.textContent = --count;
}
function inc() {
  counter.textContent = ++count;
}

function res() {
  counter.textContent = 0;
}
