var output = document.getElementById('output');

var guestName = prompt("Come ti chiami?");

var guests = ["Mario", "Anna", "Franco", "Giulia", "Mattia", "Lucia"];

var flag = false;

for (var i = 0; i < guests.length; i++) {
    if (guestName === guests[i]) {
        flag = true;
    }
}

if (flag) {
    output.innerHTML = "Puoi entrare alla festa.";
} else {
    output.innerHTML = "I buttafuori ti accompagneranno all'uscita.";
}