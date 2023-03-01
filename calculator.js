// get input values from the user
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

// get the operation to be performed
let operator = prompt("Enter the operation (+, -, *, /):");

// perform the operation and store the result in a variable
let result;
switch(operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    alert("Invalid operator");
}

// display the result to the user
alert("The result is: " + result);
