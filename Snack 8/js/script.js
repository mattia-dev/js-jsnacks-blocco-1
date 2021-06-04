var output = document.getElementById('output');

var userNumber = prompt("Inserisci un numero di 4 cifre.");

var result = 0;

if (isNaN(userNumber)) {

    alert("Il testo inserito deve essere obbligatoriamente un numero!");

} else if (userNumber.length < 4) {

    alert("Il numero inserito ha meno di 4 cifre!");

} else if (userNumber.length > 4) {

    alert("Il numero inserito ha più di 4 cifre!");

} else {
    
    for (var i = 0; i < userNumber.length; i++) {
        result += parseInt(userNumber[i]);
    }

    output.innerHTML = "La somma delle cifre del numero che hai inserito è " + result;
}