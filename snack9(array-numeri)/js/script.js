// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

var insiemeNumeri = [];
var numeroUtente;
var somma = 0;
var stampa;

var i = 0;


var btn = document.getElementById("pulsante");
btn.addEventListener('click', function() {
  numeroUtente = document.getElementById('numero-utente').value;
  numeroUtente = parseInt(numeroUtente);
  console.log(numeroUtente);

  insiemeNumeri.push(numeroUtente);
  console.log(insiemeNumeri, 'array');

  if(insiemeNumeri.length == 1) {
    document.getElementById('numero-input').innerHTML = 'Hai inserito ' + insiemeNumeri.length + ' numero: ' + insiemeNumeri + '.' + '<br>' + 'La somma è inferiore 50, inserisci un altro numero.';
  } else {
    document.getElementById('numero-input').innerHTML = 'Hai inserito ' + insiemeNumeri.length + ' numeri: ' + insiemeNumeri.join(', ') + '.' + '<br>' + 'La somma è inferiore 50, inserisci un altro numero.';
  }

  document.getElementById('numero-utente').value = '';

  somma += numeroUtente;
  console.log(somma, 'somma');
  document.getElementById('somma').innerHTML = somma;


  if (somma >= 50) {
    document.getElementById('box1').className = 'hide';
    document.getElementById('box2').className = 'show';
    document.getElementById('somma').innerHTML = somma;
  }

});


var azzera = document.getElementById('re-do');
azzera.addEventListener('click', function() {

  document.getElementById('box1').className = 'show';
  document.getElementById('box2').className = 'hide';

  document.getElementById('numero-utente').value = '';
  document.getElementById('numero-input').innerHTML = 'Ancora nessun numero inserito.';
  somma = 0;
  insiemeNumeri = [];

});
