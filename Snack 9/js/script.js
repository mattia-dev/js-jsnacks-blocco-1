var output = document.getElementById('output');

var sum = 0;
var countLength = 100000;

for (var i = 1; i <= countLength; i++) {
    sum += i;
}

var average = sum / countLength;

output.innerHTML = "La somma dei primi " + countLength + " numeri è "+ sum + " e la loro media è " + average;