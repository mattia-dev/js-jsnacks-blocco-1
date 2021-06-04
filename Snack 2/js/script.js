var output = document.getElementById('output');

var firstWord = prompt("Inserisci una parola");
var secondWord = prompt("Inserisci un'altra parola");

if (firstWord.length < secondWord.length) {
    output.innerHTML = firstWord + " " + secondWord;
}  else if (firstWord.length > secondWord.length) {
    output.innerHTML = secondWord + " " + firstWord;
} else {
    output.innerHTML = "Le due parole sono di uguale lunghezza."
}