// Business Logic
function roboger(number) {
  const numArray = [number];
  const newArray = [];
  for (let i = 0; i <= number; i++) {
    if (i.toString().includes(3)) {
      newArray.push(" Won't you be my neighbor");
    } else if (i.toString().includes(2)) {
      newArray.push(" Boop!");
    } else if (i.toString().includes(1)) {
      newArray.push(" Beep!");
    } else {
      newArray.push(i);
    }
  }
  return newArray;
}

// UI Logic
function handleSubmission(event){
  event.preventDefault();
  const input = document.querySelector("#numberInput");
  const result = document.querySelector("#hiddenDiv");
  const inputNumber = parseInt(input.value);
  const printArray = roboger(inputNumber);
  const resultSpan = document.querySelector("span.results");
  resultSpan.innerText = printArray;
  result.removeAttribute("class");
};

window.addEventListener("load", function(event) {
  event.preventDefault();
  const submitForm = document.getElementById("submit-form");
  submitForm.addEventListener("submit", handleSubmission);
});