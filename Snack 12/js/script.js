var output = document.getElementById('output');

var names = ["Mattia", "Giulia", "Marco", "Grazia", "Luca", "Tiziana", "Ottavio", "Andrea"];
var surnames = ["Ferrari", "Rossi", "Bianchi", "Gialli", "Neri", "Verdi", "Blu", "Azzurri"];

var list = "Invitati:</br>";

for (var i = 0; i < 3; i++) {
    
    var randomNameIndex = Math.floor((Math.random() * names.length));
    var randomSurnameIndex = Math.floor((Math.random() * surnames.length));

    var randomName = names[randomNameIndex];
    var randomSurname = surnames[randomSurnameIndex];
    
    list += randomName + " " + randomSurname + "</br>";
}

output.innerHTML = list;