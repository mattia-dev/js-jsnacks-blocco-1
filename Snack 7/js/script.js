var output = document.getElementById('output');

for (var i = 0; i <= 1000; i++) {
    var exponentialNumber = Math.pow(2, i);
        output.innerHTML += exponentialNumber + "</br>";
}