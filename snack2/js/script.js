// Secondo snack
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var numeriDispari = [];
for (var i = 0; i < 6; i++) {
  var numeroUtente = parseInt(prompt('Inserisci un numero'));
  if (numeroUtente % 2 != 0) {
    numeriDispari.push(numeroUtente);
  }
}

// Per stampare l'array
for (var i = 0; i < numeriDispari.length; i++) {
  document.getElementById('numeri-dispari').innerHTML += numeriDispari[i] + ' ';
}
