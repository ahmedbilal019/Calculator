let buttons = document.querySelectorAll(".btn");
let display = document.getElementById("displayScreen");
display.value = "";
let operators = document.querySelectorAll(".operator");
let clearData = document.getElementById("btnClear");
let btnequal = document.getElementById("btnequal");
let firstNumber = "";
let secondNumber = "";
let step = 0;
let operation;
let result = "";
let numArray = [];
let secondNumberArray = [];
for (let btn of buttons) {
  btn.addEventListener("click", function btnClick() {
    let btnValue = btn.innerHTML;
    // console.log(btnValue);
    if (step === 0 || step === 1) {
      numArray.push(btnValue);
      step = 1;
      firstNumber = numArray.join("");
      display.value = firstNumber;
    } else if (step === 2) {
      secondNumberArray.push(btnValue);
      secondNumber = secondNumberArray.join("");
      display.value = firstNumber + operation + secondNumber;
    }
  });
}

for (let oper of operators) {
  oper.addEventListener("click", function operator() {
    if (firstNumber === "") {
      firstNumber = 0;
      display.value = "";
    }
    if (step === 2 && secondNumber !== "") {
      calculate();
    }

    operation = oper.innerHTML;
    display.value = firstNumber + operation + secondNumber;
    step = 2;
  });
}
btnequal.addEventListener("click", calculate);
clearData.addEventListener("click", function Clear() {
  display.value = "";
  firstNumber = "";
  secondNumber = "";
  numArray = [];
  secondNumberArray = [];
  step = 0;
});

function calculate() {
  let num1 = parseFloat(firstNumber);
  let num2 = parseFloat(secondNumber);
  if (operation === "+") {
    result = num1 + num2;
    display.value = result;
  } else if (operation == "-") {
    result = num1 - num2;
    display.value = result;
  } else if (operation == "*") {
    result = num1 * num2;
    display.value = result;
  } else if (operation == "/") {
    if (num2 === 0 && operation === "/") {
      result = "invalid operation";
      display.value = result;
    } else {
      result = num1 / num2;
      display.value = result;
    }
  }

  firstNumber = result.toString();
  secondNumberArray = [];
  secondNumber = "";
  operation = "";
  step = 1;
}
