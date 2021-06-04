var output = document.getElementById('output');

var oddNumbers = [];

for (var i = 0; i < 6; i++) {
    var userNumber = parseInt(prompt("Inserisci un numero"));
    if (userNumber % 2 === 1) {
        oddNumbers.push(userNumber);
    }
}

output.innerHTML = oddNumbers;
