// Collins Freitas
// Teste - GSM

var numbers = [1,9,3,8,20];
var elements = numbers.length;
var container = "container";
var labelMax = "Valor máximo";
var labelMin = "Valor mínimo";
var labelQtd = "Valor médio";
var labelAverage = "Média";


function stats(numbers) {

    var sum = 0;
    var max = Math.max.apply(null, numbers);
    var min = Math.min.apply(null, numbers);

    for( var i = 0; i < elements; i++ ){
        sum += parseInt( numbers[i], 10 );
    }

    media = sum/elements;

    document.getElementById(container).innerHTML = (
        labelMax +': ' + max + '<br>' +
        labelMax +': ' + min + '<br>' +
        labelQtd +': ' + elements + '<br>' +
        labelAverage +': ' + media);
}

stats(numbers);