function appendToOutput(value) {
    const output = document.getElementById("output");
    output.value += value;
  }

  function calculateResult() {
    const output = document.getElementById("output");
    try {
      const result = eval(output.value);
      output.value = result;
    } catch (error) {
      output.value = "Error";
    }
  }

  function clearOutput() {
    const output = document.getElementById("output");
    output.value = "";
  }







































// // Get the necessary elements
// const historyValue = document.getElementById("history-value");
// const outputValue = document.getElementById("output-value");
// const buttons = document.getElementsByClassName("operator");

// let history = "";
// let output = "";

// // Add click event listeners to the calculator buttons
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     const buttonText = this.innerHTML;

//     if (buttonText === "C") {
//       history = "";
//       output = "";
//     } else if (buttonText === "CE") {
//       output = output.slice(0, -1);
//     } else if (buttonText === "=") {
//       output = evaluateExpression(history);
//     } else {
//       output += buttonText;
//     }

//     historyValue.innerHTML = history;
//     outputValue.innerHTML = output;
//   });
// }

// // Evaluate the expression using the eval() function
// function evaluateExpression(expression) {
//   try {
//     return eval(expression);
//   } catch (error) {
//     console.log("Error: Invalid expression");
//     return "";
//   }
// }
