var output = document.getElementById('output');

//for version
var sum = 0;

for (var i = 0; i < 5; i++) {
    var userNumber = parseInt(prompt("Inserisici un numero!"));
    
    while (isNaN(userNumber)) {

        alert("Il testo inserito deve essere obbligatoriamente un numero!");
        
        var userNumber = parseInt(prompt("Inserisici un numero!"));

    }

    sum += userNumber;
}

output.innerHTML = "La somma dei numeri da te inseriti è " + sum;


//while version
var result = 0;
var x = 0;

while (x < 5) {
    var userInput = parseInt(prompt("Inserisici un numero!"));

    while (isNaN(userInput)) {

        alert("Il testo inserito deve essere obbligatoriamente un numero!");

        var userInput = parseInt(prompt("Inserisici un numero!"));

    }

    result += userInput;

    x++;
}

output.innerHTML += "</br>La somma dei numeri da te inseriti è " + result;