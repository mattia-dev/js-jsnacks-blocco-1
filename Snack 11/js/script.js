var output = document.getElementById('output');

var userNumber = parseInt(prompt("Inserisci un numero!"));

if (userNumber % 2 === 0) {
    output.innerHTML = userNumber;
} else {
    output.innerHTML = userNumber + 1;
}