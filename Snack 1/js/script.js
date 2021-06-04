var output = document.getElementById('output');

var firstNumber = parseInt(prompt("Inserisci un numero"));
var secondNumber = parseInt(prompt("Inserisci un altro numero"));

if (firstNumber > secondNumber) {
    output.innerHTML = firstNumber;
} else if  (firstNumber === secondNumber) {
    output.innerHTML = "I due numeri sono uguali";
} else {
    output.innerHTML = secondNumber;
}