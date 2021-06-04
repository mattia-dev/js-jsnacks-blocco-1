var output = document.getElementById('output');

var number = 0;

for (var i = 0; i < 10; i++) {
    number += parseInt(prompt("Inserisci un numero."));
}

output.innerHTML = number;