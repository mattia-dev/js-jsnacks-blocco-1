var output = document.getElementById('output');

var n = parseInt(prompt("Scrivi un numero!"));

for (var i = 1; i <= n; i++) {
    nCube = Math.pow(i, 3);
    output.innerHTML += nCube + "</br>";
}